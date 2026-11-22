import React from 'react';
import styles from './index.module.css';
import type { StandardModelLinkProps } from './types';
import Body from './components/components/Body';

/**
 * 组件布局: 标准模型连接
 */
const StandardModelLinkComponent: React.FC<StandardModelLinkProps> = (props) => {

  return (
    <>
      <Body
        onClick={props.onLinkClick}
        hasArrow={props.hasArrow}
        color={props.color}
        points={props.points}
        name={props.name}
        showName={props.showName}
      />
    </>
  );
};

export default StandardModelLinkComponent;
