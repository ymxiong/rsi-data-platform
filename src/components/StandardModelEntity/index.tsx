import React from 'react';
import StandardModelEntityTitleWrapper from '@/components/StandardModelEntityTitle/wrapper';
import StandardModelEntityContentWrapper from '@/components/StandardModelEntityContent/wrapper';
import styles from './index.module.css';
import type { StandardModelEntityProps } from './types';

/**
 * 组件布局: 标准模型实体
 */
const StandardModelEntityComponent: React.FC<StandardModelEntityProps> = (props) => {

  return (
    <>
      <div
        className={styles.div}
      >
        <div
          className={styles.divDiv0}
          {...props.actions.eventsDivDiv0}
        >
          <div
            className={styles.divDiv0Div0}
          >
            <StandardModelEntityTitleWrapper
              modelVisual={props.modelVisual}
              ifFold={props.ifFold}
              setIfFold={props.setIfFold}
              element={props.element}
              onElementChange={props.onElementChange}
            />
          </div>
          { props.ifFold && (<div
            className={styles.divDiv0Div1}
          >
            <StandardModelEntityContentWrapper
              modelVisual={props.modelVisual}
            />
          </div>)}
        </div>
      </div>
    </>
  );
};

export default StandardModelEntityComponent;
