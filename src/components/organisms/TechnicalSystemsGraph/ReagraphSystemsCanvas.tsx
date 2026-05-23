import { useEffect, useMemo, useRef } from 'react';
import {
  GraphCanvas,
  Svg,
  darkTheme,
  type GraphEdge,
  type GraphCanvasRef,
  type GraphNode,
  type InternalGraphNode,
  type InternalGraphPosition,
  type LayoutOverrides,
  type NodeRenderer,
  type Theme,
} from 'reagraph';

import hexagonNodeUrl from '../../../../assets/images/timeline-dot.svg';
import robotoMonoFontUrl from '../../../../assets/font/Roboto_Mono/RobotoMono-VariableFont_wght.ttf';

const MAX_ZOOM = 3.6;
const MIN_ZOOM = 0.7;
const INITIAL_ZOOM = MAX_ZOOM * 0.75;

export interface GraphNodePosition {
  x: number;
  y: number;
  z: number;
}

export interface ReagraphSystemsCanvasProps {
  activeNodeIds: string[];
  draggedNodePositions: Record<string, InternalGraphPosition>;
  edges: GraphEdge[];
  isInteractive: boolean;
  nodePositions: Record<string, GraphNodePosition>;
  nodes: GraphNode[];
  onCanvasClick: () => void;
  onNodeDragged: (node: InternalGraphNode) => void;
  onNodePointerOut: () => void;
  onNodePointerOver: (node: InternalGraphNode) => void;
}

const graphTheme: Theme = {
  ...darkTheme,
  canvas: {
    background: '#000000',
    fog: null,
  },
  node: {
    ...darkTheme.node,
    fill: '#e4e4e7',
    activeFill: '#f4f4f5',
    opacity: 1,
    inactiveOpacity: 0.4,
    selectedOpacity: 1,
    label: {
      ...darkTheme.node.label,
      activeColor: '#ffffff',
      backgroundOpacity: 0,
      color: '#ffffff',
      stroke: '#000000',
      strokeColor: '#000000',
      strokeWidth: 0,
    },
  },
  edge: {
    ...darkTheme.edge,
    activeFill: '#7c3aed',
    fill: '#7c3aed',
    inactiveOpacity: 0.18,
    label: {
      ...darkTheme.edge.label,
      activeColor: '#ffffff',
      color: '#ffffff',
    },
    opacity: 0.55,
    selectedOpacity: 1,
  },
  arrow: {
    activeFill: '#7c3aed',
    fill: '#7c3aed',
  },
};

export function ReagraphSystemsCanvas({
  activeNodeIds,
  draggedNodePositions,
  edges,
  isInteractive,
  nodePositions,
  nodes,
  onCanvasClick,
  onNodeDragged,
  onNodePointerOut,
  onNodePointerOver,
}: ReagraphSystemsCanvasProps) {
  const graphCanvasRef = useRef<GraphCanvasRef>(null);

  const renderNode = useMemo<NodeRenderer>(
    () => (nodeProps) => (
      <Svg
        {...nodeProps}
        fillMeshProps={{
          position: [-13, -15, 1],
        }}
        image={hexagonNodeUrl}
      />
    ),
    [],
  );

  const layoutOverrides = useMemo(
    () =>
      ({
        getNodePosition: (id: string, { nodes: internalNodes }) => {
          const internalNode = internalNodes.find((node) => node.id === id);

          if (!internalNode) {
            return {
              data: null,
              id,
              index: 0,
              links: [],
              vx: 0,
              vy: 0,
              x: 0,
              y: 0,
              z: 0,
            };
          }

          const basePosition = internalNode.position ?? {
            data: internalNode.data,
            id: internalNode.id,
            index: 0,
            links: [],
            vx: 0,
            vy: 0,
            x: 0,
            y: 0,
            z: 0,
          };
          const position = draggedNodePositions[id] ?? nodePositions[id];

          if (!position) {
            return basePosition;
          }

          return {
            ...basePosition,
            x: position.x,
            y: position.y,
            z: position.z,
          };
        },
      }) as LayoutOverrides,
    [draggedNodePositions, nodePositions],
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      graphCanvasRef.current?.getControls().zoomTo(INITIAL_ZOOM, true);
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <GraphCanvas
      ref={graphCanvasRef}
      actives={activeNodeIds}
      animated={false}
      cameraMode="pan"
      constrainDragging={false}
      disabled={!isInteractive}
      draggable={isInteractive}
      edgeArrowPosition="none"
      edgeInterpolation="linear"
      edges={edges}
      labelType="all"
      labelFontUrl={robotoMonoFontUrl}
      layoutOverrides={layoutOverrides}
      layoutType="custom"
      maxZoom={MAX_ZOOM}
      minZoom={MIN_ZOOM}
      nodes={nodes}
      onCanvasClick={onCanvasClick}
      onNodeDragged={onNodeDragged}
      onNodePointerOut={onNodePointerOut}
      onNodePointerOver={onNodePointerOver}
      renderNode={renderNode}
      selections={activeNodeIds}
      theme={graphTheme}
    />
  );
}
