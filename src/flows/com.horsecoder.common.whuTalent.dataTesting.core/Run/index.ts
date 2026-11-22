import request from '@/utils/axios';
import type { StandardPromise } from '@/utils/axios';

/**
 * 入参明细:
 */
export interface FlowRunParams {
}

/**
 * 出参明细:
 */
export interface FlowRunResults {
}

/**
 * 运行
 * @com.horsecoder.common.whuTalent.dataTesting.core/FLOW_RUN
 */
export const flowRun = async (params: FlowRunParams): StandardPromise<FlowRunResults> => {
  return request('/dataTesting-core/api/engine/flow', {
    method: 'POST',
    data: {
      flowId: '@com.horsecoder.common.whuTalent.dataTesting.core/FLOW_RUN',
      params: { ...params },
    },
  });
};


export const flowRunFacade = async (params: FlowRunParams): Promise<FlowRunResults> => {
  const { data: { value } } =  await flowRun(params);
  return value;
};