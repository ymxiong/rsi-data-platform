import React from 'react';
import styles from './index.module.css';
import type { StandardModelEntityTitleProps } from './types';

/**
 * 组件布局: 标准模型实体标题
 */
const StandardModelEntityTitleComponent: React.FC<StandardModelEntityTitleProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
        {...props.actions.eventsDiv}
      >
        <h4
          className={styles.divH40}
          style={{ background: props.backgroundColor}}
        >
          {props.title}
        </h4>
      </div>
    </>
  );
};

export default StandardModelEntityTitleComponent;
