'use client';
import React, { useMemo, useState } from 'react';
import type { StandardModelEntityWrapperProps } from './types';
import { eventsDivDiv0 } from './actions';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import type { Setter } from './setter';
import StandardModelEntityComponent from './index';
import { useDispatch } from 'react-redux';


/**
 * 组件逻辑: 标准模型实体
 */
const StandardModelEntityWrapper: React.FC<StandardModelEntityWrapperProps> = (props) => {
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
  // 内部数据: 模型可视化(modelVisual)
  const modelVisual: ModelVisual = props.pendant?.data.detail;
  // 内部数据: 挂载数据(pendant)
  const { pendant } = props;
  // 内部数据: 元素(element)
  const { element } = props;
  // 内部数据: 元素变化(onElementChange)
  const { onElementChange } = props;
  // 可见控制数据: 是否折叠(ifFold)
  const [ifFold, setIfFold] = useState<boolean>(false);
  const setter: Setter = useMemo(() => { return { setIfFold };}, []);
  const actions = {
    // 组件divDiv0事件响应触发的交互入口
    eventsDivDiv0: useMemo(() => eventsDivDiv0(setter, dispatch), [setter, dispatch]),
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

  console.log('ifFold', ifFold);

  /*
   * [END OF YOUR CODE]
   */
  return (
    <StandardModelEntityComponent 
      modelVisual={modelVisual}
      pendant={pendant}
      element={element}
      onElementChange={onElementChange}
      ifFold={ifFold}
      setIfFold={setIfFold}
      actions={actions}
    />
  );
};

export default StandardModelEntityWrapper;
