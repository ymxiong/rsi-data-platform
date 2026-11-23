import React, { useEffect, useMemo, useRef } from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
import type { LoginProps } from './types';

import VisualDiagram, { VisualToolbarConfig } from '@horsecoder/visual-core';


import {
  VisualCanvasConfig,
  VisualElementConfig,
  VisualLinkConfig,
} from '@horsecoder/visual-core';
import StandardModelEntityWrapper from '@/components/StandardModelEntity/wrapper';
import StandardModelLinkWrapper from '@/components/StandardModelLink/wrapper';
import { getView, refreshCanvasLocked, refreshElementLocked, setView } from './handler/handler/diagramHandler';

import { first_test } from './test/first_test';
import { flowRun } from '@/src/flows/com.horsecoder.common.whuTalent.dataTesting.core/Run';


/**
 * 组件布局: 登录
 */
const LoginPage: React.FC<LoginProps> = () => {



  // 内部数据: diagramRefInner(diagramRef)
  const diagramRef = useRef<any>(null);
  // 内部数据: 工具栏配置(toolbarConfig)
  const toolbarConfig: VisualToolbarConfig = useMemo(() => [], []);

  useEffect(() => {
    if (diagramRef.current) {
      refreshCanvasLocked(diagramRef, false);
      setView(diagramRef, first_test);
    };
  }, [])




  const elementConfig: VisualElementConfig = useMemo(
    () => ({
      components: {
        model: {
          component: StandardModelEntityWrapper,
          minSize: {
            width: 100,
            height: 55,
          },
        },
      },
    }),
    [],
  );

  const linkConfig: VisualLinkConfig = useMemo(
    () => ({
      components: {
        relation: {
          component: StandardModelLinkWrapper,
          hasArrow: true,
          showName: true,
        },
      },
    }),
    [],
  );

    const canvasConfig: VisualCanvasConfig = useMemo(
    () => ({
      toolbarConfig,
      elementConfig,
      linkConfig,
      globalConfig: {
        gridSize: 25,
      },
    }),
    [toolbarConfig, elementConfig, linkConfig],
  );


  return (
    <>
      <div
        className={styles.div}
      >
        <Button
          className={styles.divButton0}
          type="primary"
          onClick={()=>{
            flowRun({structure: JSON.stringify(getView(diagramRef))})
          }}
        >
          {`运行`}
        </Button>
      </div>
      <VisualDiagram
        // className={styles.divDiv0}
        ref={diagramRef}
        // {...props.actions.eventsDiv}
        canvasConfig={canvasConfig}
      />
    </>
  );
};

export default LoginPage;
