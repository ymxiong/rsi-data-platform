import { getCoreModelFromVisualModel, getStructure } from '@/standard/AppStandard/AppBridge';
import { uploadApp } from '@/standard/AppStandard/AppStandard';
import { uploadAppVisual } from '@/standard/AppStandard/AppVisualStandard';
import { uploadFamily } from '@/standard/CodeStandard/AppFamilyStandard';
import { getVisualModelFromViewState, VisualModel } from '@/standard/VisualModel/VisualModel';
import { message } from 'antd';
import { getView } from '../diagramHandler';
import {User} from "@/types/com.horsecoder.identity/sys/User";

export const handleUpload = (
  visualDiagramRef: any,
  coreVisualModel: VisualModel | undefined,
  modelId: string,
  loginUser: User,
): void => {
  // 1. 从底层视图entityState从抽取可视模型并直接合并
  const viewFromCore = getView(visualDiagramRef);
  if (!viewFromCore || !coreVisualModel) return;
  const visualModel = getVisualModelFromViewState(coreVisualModel, viewFromCore);

  // 2. 从可视模型中分离出核心模型
  const { app, appVisual } = getCoreModelFromVisualModel(visualModel);

  // 4. 上传最终的标准化数据
  Promise.all([uploadApp(modelId, app, loginUser), uploadAppVisual(modelId, appVisual, loginUser)])
  .then(() => {
    message.success('上传成功');
  })
  .catch(() => {
    message.error('上传失败，请稍后尝试。');
  });

  const familyList = getStructure(visualModel);
  // console.log('familyList', familyList);

  const promiseList: Promise<any>[] = [];
  familyList.forEach((family) => {
    promiseList.push(uploadFamily(modelId, family, loginUser));
  });
  Promise.all(promiseList)
  .then(() => {
    message.success('新版上传成功');
  })
  .catch(() => {
    message.error('新版上传失败，请稍后尝试。');
  });

};
