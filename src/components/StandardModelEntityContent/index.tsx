import React from 'react';
import StandardModelEntitySingleItemWrapper from '@/components/StandardModelEntitySingleItem/wrapper';
import styles from './index.module.css';
import type { StandardModelEntityContentProps } from './types';

/**
 * 组件布局: 标准模型实体内容
 */
const StandardModelEntityContentComponent: React.FC<StandardModelEntityContentProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        {props.fields.map((fieldVisual) =>
        <StandardModelEntitySingleItemWrapper
          key={fieldVisual.field.name}
          fieldVisual={fieldVisual}
          modelVisual={props.modelVisual}
        />
        )}
      </div>
    </>
  );
};

export default StandardModelEntityContentComponent;
