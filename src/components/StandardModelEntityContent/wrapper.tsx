'use client';
import React, { useEffect, useState } from 'react';
import type { StandardModelEntityContentWrapperProps } from './types';
import StandardModelEntityContentComponent from './index';


/**
 * 组件逻辑: 标准模型实体内容
 */
const StandardModelEntityContentWrapper: React.FC<StandardModelEntityContentWrapperProps> = (props) => {
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
  // 内部可变数据: 内部field列表(fields)
  const [fields, setFields] = useState<FieldVisual[]>([]);

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
    setFields(modelVisual.fields);
  }, [setFields, modelVisual.fields]);

  /*
   * [END OF YOUR CODE]
   */
  return (
    <StandardModelEntityContentComponent 
      modelVisual={modelVisual}
      fields={fields}
      setFields={setFields}
    />
  );
};

export default StandardModelEntityContentWrapper;
