'use client';
import React, { useEffect, useMemo, useState } from 'react';
import type { StandardModelEntityTitleWrapperProps } from './types';
import { eventsDiv } from './actions';
import type { Setter } from './setter';
import StandardModelEntityTitleComponent from './index';

import hex2Rgba from '@/utils/hex2Rgba';

/**
 * 组件逻辑: 标准模型实体标题
 */
const StandardModelEntityTitleWrapper: React.FC<StandardModelEntityTitleWrapperProps> = (props) => {
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
  // 内部数据: 传入模型可视化(modelVisual)
  const { modelVisual } = props;
  // 内部数据: 传入是否折叠(ifFold)
  const { ifFold } = props;
  // 内部数据: 传入设置是否折叠(setIfFold)
  const { setIfFold } = props;
  // 内部数据: 元素(element)
  const { element } = props;
  // 内部数据: 元素变化(onElementChange)
  const { onElementChange } = props;
  // 内部可变数据: 标题(title)
  const [title, setTitle] = useState<string>('标准流程');
  // 内部可变数据: 背景颜色(backgroundColor)
  const [backgroundColor, setBackgroundColor] = useState<string>('#fff');
  const setter: Setter = useMemo(() => { return { setTitle, setBackgroundColor };}, []);
  const actions = {
    // 组件div事件响应触发的交互入口
    eventsDiv: useMemo(() => eventsDiv(setter, ifFold, setIfFold, element, onElementChange), [setter, ifFold, setIfFold, element, onElementChange]),
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

    useEffect(() => {
      const { color } = element.state;
      setter.setBackgroundColor(color ? `linear-gradient(to right, ${hex2Rgba(color)}, ${hex2Rgba(color, 0.8)}, ${hex2Rgba(color, 0.5)})`:'#fff');
      setter.setTitle(modelVisual.model?.modelTitle);
    }, [element.state, modelVisual.model?.modelTitle, setter])

  /*
   * [END OF YOUR CODE]
   */
  return (
    <StandardModelEntityTitleComponent 
      modelVisual={modelVisual}
      ifFold={ifFold}
      setIfFold={setIfFold}
      element={element}
      onElementChange={onElementChange}
      title={title}
      setTitle={setTitle}
      backgroundColor={backgroundColor}
      setBackgroundColor={setBackgroundColor}
      actions={actions}
    />
  );
};

export default StandardModelEntityTitleWrapper;
