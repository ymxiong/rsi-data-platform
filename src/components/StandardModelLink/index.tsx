import React from 'react';
import styles from './index.module.css';
import type { StandardModelLinkProps } from './types';

/**
 * 组件布局: 标准模型连接
 */
const StandardModelLinkComponent: React.FC<StandardModelLinkProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
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
