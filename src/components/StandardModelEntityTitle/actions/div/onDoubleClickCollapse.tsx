import React from 'react';
import { ElementView } from '@horsecoder/visual-core';
import type { Setter } from '../../setter';

/**
 * 双击折叠
 * 唯一id: standardModelEntityTitle-onDoubleClickCollapse
 */
export const onDoubleClickCollapse = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setter: Setter,
  ifFold: boolean,
  setIfFold: (ifFold: boolean) => void,
  element: ElementView,
  onElementChange: (element: ElementView) => void,
): void => {
  /*
   * 参考代码生成区域
   * 可以删除或者注释
   * 不可编辑后直接使用
   */
  /*
   * end
   */
  /*
   * 自定义代码区域
   * [YOUR CODE HERE]
   */

  setIfFold(!ifFold);
  onElementChange(element);

  /*
   * [END OF YOUR CODE]
   */
};
