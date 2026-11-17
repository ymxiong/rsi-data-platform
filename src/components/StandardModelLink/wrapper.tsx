'use client';
import React from 'react';
import type { StandardModelLinkWrapperProps } from './types';
import StandardModelLinkComponent from './index';


/**
 * 组件逻辑: 标准模型连接
 */
const StandardModelLinkWrapper: React.FC<StandardModelLinkWrapperProps> = () => {
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
  // 内部数据: 使用箭头(hasArrow)
  const hasArrow = true;
  // 内部数据: 显示名称(showName)
  const showName = true;
  // 内部数据: 颜色(color)
  const { color } = props.link.state;
  // 内部数据: 绘制点(points)
  const { points } = props.link.state;
  // 内部数据: 名称(name)
  const { name } = props.link.state;
  // 内部数据: 点击线段(onLinkClick)
  const onLinkClick = () => {
    if (props.pendant) {
      const pendant: PendantData = {
        type: 'onLinkClick',
        detail: props.link.id,
      };
      props.pendant.onDataChange(pendant);
    }
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
    <StandardModelLinkComponent 
      hasArrow={hasArrow}
      showName={showName}
      color={color}
      points={points}
      name={name}
      onLinkClick={onLinkClick}
    />
  );
};

export default StandardModelLinkWrapper;
