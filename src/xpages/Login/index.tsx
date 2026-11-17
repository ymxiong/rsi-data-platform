'use client';
import React, { useMemo, useRef } from 'react';
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
import { setView } from './handler/handler/diagramHandler';


/**
 * 组件布局: 登录
 */
const LoginPage: React.FC<LoginProps> = () => {



  // 内部数据: diagramRefInner(diagramRef)
  const diagramRef = useRef<any>(null);
  // 内部数据: 工具栏配置(toolbarConfig)
  const toolbarConfig: VisualToolbarConfig = useMemo(() => [], []);

  if(diagramRef.current) {
    setView(diagramRef, {
      
      "id": "horsecoder",
      "elements": [
          {
              "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
              "name": "飞特六轴臂",
              "type": "model",
              "color": "#73d13d",
              "x": 508.0092544555664,
              "y": 330.0092544555664,
              "select": false,
              "locked": false,
              "pendant": {
                  "data": {
                      "type": "model",
                      "detail": {
                          "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                          "model": {
                              "module": "sys",
                              "modelTitle": "飞特六轴臂",
                              "name": "feetechSixAxisArm",
                              "ifOpen": 0,
                              "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                              "pk": [
                                  "id"
                              ],
                              "fields": [
                                  {
                                      "notes": "飞特六轴臂ID",
                                      "name": "id",
                                      "length": "32",
                                      "type": "String",
                                      "fieldTitle": "飞特六轴臂ID"
                                  },
                                  {
                                      "notes": "名称",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "name",
                                      "length": "32",
                                      "fieldTitle": "名称",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  },
                                  {
                                      "notes": "端口",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "port",
                                      "length": "32",
                                      "fieldTitle": "端口",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  },
                                  {
                                      "notes": "更新时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "extra": "ON UPDATE current_timestamp()",
                                      "name": "gmtUpdate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "更新时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  },
                                  {
                                      "notes": "创建时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "name": "gmtCreate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "创建时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  }
                              ],
                              "order": "gmtCreate desc"
                          },
                          "component": {
                              "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                              "modelId": "@net.sosn.robotic.arm/feetechSixAxisArm",
                              "isCollapse": false,
                              "x": 508.0092544555664,
                              "y": 330.0092544555664
                          },
                          "fields": [
                              {
                                  "field": {
                                      "notes": "飞特六轴臂ID",
                                      "name": "id",
                                      "length": "32",
                                      "type": "String",
                                      "fieldTitle": "飞特六轴臂ID"
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "名称",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "name",
                                      "length": "32",
                                      "fieldTitle": "名称",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "端口",
                                      "editable": true,
                                      "notnull": false,
                                      "name": "port",
                                      "length": "32",
                                      "fieldTitle": "端口",
                                      "type": "String",
                                      "filterTypes": [
                                          "equal"
                                      ]
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "更新时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "extra": "ON UPDATE current_timestamp()",
                                      "name": "gmtUpdate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "更新时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  }
                              },
                              {
                                  "field": {
                                      "notes": "创建时间",
                                      "editable": false,
                                      "defaultValue": "current_timestamp()",
                                      "notnull": true,
                                      "name": "gmtCreate",
                                      "length": "0",
                                      "type": "DateTime",
                                      "fieldTitle": "创建时间",
                                      "filterTypes": [
                                          "between"
                                      ]
                                  }
                              }
                          ],
                          "familyId": "net.sosn.robotic.arm",
                          "thirdParty": false,
                          "size": {
                              "width": 125,
                              "height": 75
                          }
                      }
                  }
              }
          }
      ],
      "links": []
  })};


  const elementConfig: VisualElementConfig = useMemo(
    () => ({
      components: {
        model: {
          component: StandardModelEntityWrapper,
          minSize: {
            width: 162,
            height: 65,
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
