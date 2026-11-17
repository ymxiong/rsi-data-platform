import React from 'react';
import styles from './index.module.css';
import type { StandardModelEntitySingleItemProps } from './types';

/**
 * 组件布局: 标准模型实体单项
 */
const StandardModelEntitySingleItemComponent: React.FC<StandardModelEntitySingleItemProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
        {...props.actions.eventsDiv}
      >
        <p
          className={styles.divP0}
        >
          {props.fieldVisual.field.fieldTitle}
        </p>
      </div>
    </>
  );
};

export default StandardModelEntitySingleItemComponent;
