import { Point } from '@/utils/design/Point';
import React from 'react';

type LineProps = {
  fill: string;
  color: string;
  d: string;
  name: string;
  namePoint: Point;
  direction: string;
  showName: boolean;
};

const Line: React.FC<LineProps> = (props: LineProps) => {
  return (
    <>
      {/* <defs> */}
      {/* <filter id="linkShadow" x="-20" y="-20" width="200" height="200"> */}
      {/* <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" /> */}
      {/* <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" /> */}
      {/* <feBlend in="SourceGraphic" in2="blurOut" mode="normal" /> */}
      {/* </filter> */}
      {/* </defs> */}
      <path
        d={props.d}
        min-height="10px"
        min-weight="10px"
        fill={props.fill ? props.fill : 'none'}
        strokeWidth=".2em"
        stroke={props.color || 'black'}
        strokeLinejoin="round"
        // filter="url(#linkShadow)"
      />
      {props.showName && (
        <text
          x={props.namePoint.x}
          y={props.namePoint.y}
          stroke={props.color}
          writingMode={props.direction === 'v' ? 'tb' : ''}
        >
          {props.name}
        </text>
      )}
    </>
  );
};

export { Line };
