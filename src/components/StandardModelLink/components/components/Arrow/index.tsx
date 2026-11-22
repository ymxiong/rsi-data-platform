import React from 'react';

type ArrowProps = {
  color: string;
  d: string;
};

const Arrow = (props: ArrowProps): JSX.Element => (
  <>
    {/* <defs> */}
    {/* <filter id="arrowShadow" x="-20" y="-20" width="200" height="200"> */}
    {/* <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" /> */}
    {/* <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" /> */}
    {/* <feBlend in="SourceGraphic" in2="blurOut" mode="normal" /> */}
    {/* </filter> */}
    {/* </defs> */}
    <path
      // filter="url(#arrowShadow)"
      fill={props.color ? props.color : 'black'}
      stroke={props.color || 'black'}
      strokeLinejoin="round"
      d={props.d}
    />
  </>
);

export default Arrow;
