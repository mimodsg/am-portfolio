import { lazy, Suspense, useMemo, useState, type HTMLAttributes } from 'react';
import type {
  GraphEdge,
  GraphNode,
  InternalGraphNode,
  InternalGraphPosition,
} from 'reagraph';

import { Teaser } from '@/components/molecules/Teaser';
import { TechnicalSystemsLegend } from '@/components/molecules/TechnicalSystemsLegend';
import type { GraphNodePosition } from './ReagraphSystemsCanvas';
import {
  technicalSystemEdges,
  technicalSystemNodes,
} from '@/data/technicalSystems';
import { cn } from '@/lib/cn';
import type { SectionAlign } from '@/types/sectionAlignment';

import './technical-systems-graph.css';

const HUB_NODE_ID = 'technical-systems';
const ROOT_NODE_IDS = new Set(['frontend', 'backend', 'platform']);
type DraggedNodePositions = Record<string, InternalGraphPosition>;
type BranchId = 'frontend' | 'backend' | 'platform';

const ROOT_LAYOUT: Record<BranchId, { angle: number; radius: number; spread: number }> = {
  frontend: { angle: 150, radius: 95, spread: 82 },
  platform: { angle: 30, radius: 95, spread: 72 },
  backend: { angle: 275, radius: 100, spread: 155 },
};

const CHILD_RADIUS = 80;
const MIN_BRANCH_RADIUS = 40;

const ReagraphSystemsCanvas = lazy(() =>
  import('./ReagraphSystemsCanvas').then((module) => ({
    default: module.ReagraphSystemsCanvas,
  })),
);

export interface TechnicalSystemsGraphProps
  extends HTMLAttributes<HTMLElement> {
  align?: SectionAlign;
  heading?: string;
  eyebrow?: string;
  intro?: string;
  headingId?: string;
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

function createGraphNodePositions(): Record<string, GraphNodePosition> {
  const positions: Record<string, GraphNodePosition> = {
    [HUB_NODE_ID]: { x: 0, y: 0, z: 0 },
  };

  const childrenByParent = technicalSystemEdges.reduce<
    Record<string, string[]>
  >((groups, edge) => {
    groups[edge.from] = [...(groups[edge.from] ?? []), edge.to];
    return groups;
  }, {});

  const placeDescendants = (
    parentId: string,
    parentPosition: GraphNodePosition,
    parentAngle: number,
    spread: number,
    radius: number,
  ) => {
    const children = childrenByParent[parentId] ?? [];
    const childAngles = getChildAngles(parentAngle, spread, children.length);

    children.forEach((childId, index) => {
      const childAngle = childAngles[index];
      const childPosition = polarToPosition(parentPosition, childAngle, radius);

      positions[childId] = childPosition;

      placeDescendants(
        childId,
        childPosition,
        childAngle,
        Math.max(44, spread * 0.62),
        Math.max(MIN_BRANCH_RADIUS, radius * 0.72),
      );
    });
  };

  (Object.keys(ROOT_LAYOUT) as BranchId[]).forEach((rootId) => {
    const rootLayout = ROOT_LAYOUT[rootId];
    const rootPosition = polarToPosition(
      positions[HUB_NODE_ID],
      rootLayout.angle,
      rootLayout.radius,
    );

    positions[rootId] = rootPosition;
    placeDescendants(
      rootId,
      rootPosition,
      rootLayout.angle,
      rootLayout.spread,
      CHILD_RADIUS,
    );
  });

  return positions;
}

export function TechnicalSystemsGraph({
  align = 'left',
  className,
  heading = 'Technical systems',
  eyebrow = 'Systems Thinking',
  intro = 'A connected view of the technologies I use to shape frontend systems, CMS architecture, and backend platform decisions.',
  headingId = 'technical-systems-title',
  ...props
}: TechnicalSystemsGraphProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isGraphInteractive, setIsGraphInteractive] = useState(false);
  const [draggedNodePositions, setDraggedNodePositions] =
    useState<DraggedNodePositions>({});

  const hoveredNode = useMemo(
    () => technicalSystemNodes.find((node) => node.id === hoveredNodeId),
    [hoveredNodeId],
  );

  const graphNodes = useMemo<GraphNode[]>(
    () =>
      technicalSystemNodes.map((node) => ({
        id: node.id,
        label: node.label,
        cluster: node.cluster,
        data: node,
        fill: '#e4e4e7',
        labelVisible: true,
        size:
          node.id === HUB_NODE_ID ? 79 : ROOT_NODE_IDS.has(node.id) ? 71 : 54,
      })),
    [],
  );

  const graphEdges = useMemo<GraphEdge[]>(
    () =>
      technicalSystemEdges.map((edge) => ({
        id: `${edge.from}-${edge.to}`,
        source: edge.from,
        target: edge.to,
        fill: '#a78bfa',
        interpolation: 'linear',
        arrowPlacement: 'none',
      })),
    [],
  );

  const graphNodePositions = useMemo(() => createGraphNodePositions(), []);

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
      aria-labelledby={headingId}
      className={cn(
        'technical-systems-graph',
        `technical-systems-graph--${align}`,
        className,
      )}
      id="systems"
      {...props}
    >
      <Teaser
        className="technical-systems-graph__teaser"
        context="dark"
        eyebrow={eyebrow}
        heading={heading}
        headingId={headingId}
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
