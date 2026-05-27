import { lazy, Suspense, useMemo, useState, type HTMLAttributes } from 'react';
import type {
  GraphEdge,
  GraphNode,
  InternalGraphNode,
  InternalGraphPosition,
} from 'reagraph';

import { Teaser } from '@/components/molecules/Teaser';
import { TechnicalSystemsLegend } from '@/components/molecules/TechnicalSystemsLegend';
import type {
  TechnicalSystemEdge,
  TechnicalSystemNode,
} from '@/data/technicalSystems';
import type { GraphNodePosition } from './ReagraphSystemsCanvas';
import {
  technicalSystemEdges,
  technicalSystemNodes,
} from '@/data/technicalSystems';
import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './technical-systems-graph.css';

const HUB_NODE_ID = 'technical-systems';
type DraggedNodePositions = Record<string, InternalGraphPosition>;
const ROOT_RADIUS = 108;
const CHILD_RADIUS = 82;
const MIN_BRANCH_RADIUS = 40;
const ROOT_ANGLE_START = 205;
const ROOT_ANGLE_SWEEP = 310;

const ReagraphSystemsCanvas = lazy(() =>
  import('./ReagraphSystemsCanvas').then((module) => ({
    default: module.ReagraphSystemsCanvas,
  })),
);

export interface TechnicalSystemsGraphProps
  extends HTMLAttributes<HTMLElement> {
  align?: SectionAlign;
  eyebrow?: string;
  edges?: TechnicalSystemEdge[];
  heading?: string;
  intro?: string;
  headingId?: string;
  nodes?: TechnicalSystemNode[];
}

function polarToPosition(
  center: GraphNodePosition,
  angleDegrees: number,
  radius: number,
): GraphNodePosition {
  const angle = (angleDegrees * Math.PI) / 180;

  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius,
    z: 0,
  };
}

function getChildAngles(
  centerAngle: number,
  spread: number,
  childCount: number,
) {
  if (childCount <= 1) {
    return [centerAngle];
  }

  const step = spread / (childCount - 1);
  const start = centerAngle - spread / 2;

  return Array.from({ length: childCount }, (_, index) => start + step * index);
}

function getRootNodeIds(edges: TechnicalSystemEdge[]) {
  return edges.filter((edge) => edge.from === HUB_NODE_ID).map((edge) => edge.to);
}

function getRootAngles(rootCount: number) {
  if (rootCount <= 1) {
    return [ROOT_ANGLE_START - ROOT_ANGLE_SWEEP / 2];
  }

  const step = ROOT_ANGLE_SWEEP / (rootCount - 1);

  return Array.from(
    { length: rootCount },
    (_, index) => ROOT_ANGLE_START - step * index,
  );
}

function createGraphNodePositions(
  edges: TechnicalSystemEdge[],
): Record<string, GraphNodePosition> {
  const positions: Record<string, GraphNodePosition> = {
    [HUB_NODE_ID]: { x: 0, y: 0, z: 0 },
  };

  const childrenByParent = edges.reduce<
    Record<string, string[]>
  >((groups, edge) => {
    groups[edge.from] = [...(groups[edge.from] ?? []), edge.to];
    return groups;
  }, {});
  const rootNodeIds = getRootNodeIds(edges);
  const rootAngles = getRootAngles(rootNodeIds.length);

  const placeDescendants = (
    parentId: string,
    parentPosition: GraphNodePosition,
    parentAngle: number,
    depth: number,
    radius: number,
  ) => {
    const children = childrenByParent[parentId] ?? [];
    const spread = Math.max(
      36,
      Math.min(150, 22 + children.length * 18 - depth * 8),
    );
    const childAngles = getChildAngles(parentAngle, spread, children.length);

    children.forEach((childId, index) => {
      const childAngle = childAngles[index];
      const childPosition = polarToPosition(parentPosition, childAngle, radius);

      positions[childId] = childPosition;

      placeDescendants(
        childId,
        childPosition,
        childAngle,
        depth + 1,
        Math.max(MIN_BRANCH_RADIUS, radius * 0.72),
      );
    });
  };

  rootNodeIds.forEach((rootId, index) => {
    const rootAngle = rootAngles[index];
    const rootPosition = polarToPosition(
      positions[HUB_NODE_ID],
      rootAngle,
      ROOT_RADIUS,
    );

    positions[rootId] = rootPosition;
    placeDescendants(
      rootId,
      rootPosition,
      rootAngle,
      1,
      CHILD_RADIUS,
    );
  });

  return positions;
}

export function TechnicalSystemsGraph({
  align = 'left',
  className,
  edges = technicalSystemEdges,
  heading = 'Technical systems',
  eyebrow = 'Systems Thinking',
  id = 'knowledge',
  intro = 'A connected view of the technologies I use to shape frontend systems, CMS architecture, and backend platform decisions.',
  headingId,
  nodes = technicalSystemNodes,
  ...props
}: TechnicalSystemsGraphProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isGraphInteractive, setIsGraphInteractive] = useState(false);
  const [draggedNodePositions, setDraggedNodePositions] =
    useState<DraggedNodePositions>({});

  const rootNodeIds = useMemo(() => new Set(getRootNodeIds(edges)), [edges]);
  const hoveredNode = useMemo(
    () => nodes.find((node) => node.id === hoveredNodeId),
    [hoveredNodeId, nodes],
  );

  const graphNodes = useMemo<GraphNode[]>(
    () =>
      nodes.map((node) => ({
        id: node.id,
        label: node.label,
        cluster: node.cluster,
        data: node,
        fill: '#e4e4e7',
        labelVisible: true,
        size:
          node.id === HUB_NODE_ID ? 79 : rootNodeIds.has(node.id) ? 71 : 54,
      })),
    [nodes, rootNodeIds],
  );

  const graphEdges = useMemo<GraphEdge[]>(
    () =>
      edges.map((edge) => ({
        id: `${edge.from}-${edge.to}`,
        source: edge.from,
        target: edge.to,
        fill: '#a78bfa',
        interpolation: 'linear',
        arrowPlacement: 'none',
      })),
    [edges],
  );

  const graphNodePositions = useMemo(() => createGraphNodePositions(edges), [edges]);

  const handleNodePointerOver = (node: InternalGraphNode) => {
    setHoveredNodeId(node.id);
  };

  const handleNodeDragged = (node: InternalGraphNode) => {
    setDraggedNodePositions((currentPositions) => ({
      ...currentPositions,
      [node.id]: node.position,
    }));
    setHoveredNodeId(node.id);
  };

  return (
    <section
      aria-labelledby={resolvedHeadingId}
      className={cn(
        'technical-systems-graph',
        `technical-systems-graph--${align}`,
        className,
      )}
      id={id}
      {...props}
    >
      <Teaser
        align={align}
        className="technical-systems-graph__teaser"
        context="dark"
        eyebrow={eyebrow}
        heading={heading}
        headingId={resolvedHeadingId}
        intro={intro}
        variant="stacked"
      />

      <div className="technical-systems-graph__workspace">
        <div
          aria-label="Technology relationship graph"
          className={cn(
            'technical-systems-graph__canvas',
            isGraphInteractive && 'technical-systems-graph__canvas--interactive',
          )}
        >
          <Suspense
            fallback={
              <div className="technical-systems-graph__loading">
                Loading graph
              </div>
            }
          >
            <ReagraphSystemsCanvas
              activeNodeIds={hoveredNode ? [hoveredNode.id] : []}
              draggedNodePositions={draggedNodePositions}
              edges={graphEdges}
              isInteractive={isGraphInteractive}
              nodePositions={graphNodePositions}
              nodes={graphNodes}
              onCanvasClick={() => setHoveredNodeId(null)}
              onNodeDragged={handleNodeDragged}
              onNodePointerOut={() => setHoveredNodeId(null)}
              onNodePointerOver={handleNodePointerOver}
            />
          </Suspense>

          {!isGraphInteractive ? (
            <button
              className="technical-systems-graph__unlock"
              onClick={() => setIsGraphInteractive(true)}
              type="button"
            >
              Interact with graph
            </button>
          ) : (
            <button
              className="technical-systems-graph__lock"
              onClick={() => setIsGraphInteractive(false)}
              type="button"
            >
              Lock graph
            </button>
          )}

          {hoveredNode ? (
            <TechnicalSystemsLegend
              className="technical-systems-graph__legend"
              node={hoveredNode}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
