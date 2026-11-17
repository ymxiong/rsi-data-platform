'use client';
import React, { useMemo } from 'react';
import type { StandardModelEntitySingleItemWrapperProps } from './types';
import { eventsDiv } from './actions';
import StandardModelEntitySingleItemComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 标准模型实体单项
 */
const StandardModelEntitySingleItemWrapper: React.FC<StandardModelEntitySingleItemWrapperProps> = (props) => {
  /*
   * 前置代码数据区域
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  const dispatch = useDispatch();
  // 内部数据: 传入模型可视化(modelVisual)
  const { modelVisual } = props;
  // 内部数据: 传入字段可视化(fieldVisual)
  const { fieldVisual } = props;
  const actions = {
    // 组件div事件响应触发的交互入口
    eventsDiv: useMemo(() => eventsDiv(dispatch, fieldVisual, modelVisual), [dispatch, fieldVisual, modelVisual]),
  };

  /*
   * end
   */

  /*
   * 获取父组件传值
   * 定义当前组件数据
   * 定义静态变量
   * 获取组件redux数据
   * 获取组件挂载模型数据
   * 获取组件挂载流程数据
   * 装配子组件数据
   * 自定义代码区域
   * [YOUR CODE HERE]
   */


  /*
   * [END OF YOUR CODE]
   */
  return (
    <StandardModelEntitySingleItemComponent 
      modelVisual={modelVisual}
      fieldVisual={fieldVisual}
      actions={actions}
    />
  );
};

export default StandardModelEntitySingleItemWrapper;
