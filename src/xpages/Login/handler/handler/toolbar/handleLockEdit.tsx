import { handleVisualModelDownload } from '@/pages/Model/logic';
import { getAppLockedBy } from '@/standard/AppStandard/AppStandard';
import { lockModelJson } from '@/standard/request/model';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { Dispatch } from 'redux';
import { selectToolbarItems } from '../diagramHandler';
import { User } from '@/types/com.horsecoder.identity/sys/User';
import { refreshModelModelCanvasIfLockedState } from '@/pages/Model/models/action';

export const handleLockEdit = (
  dispatch: Dispatch,
  visualDiagramRef: any,
  modelId: string,
  loginUser: User,
): void => {
  getAppLockedBy(modelId).then(lockedByUser => {
    const userId = Cookies.get('userId');
    if (lockedByUser) {
      message.info(`当前APP锁持有者为:${lockedByUser.userName}`);
    }
    if (
      (lockedByUser !== undefined && lockedByUser.id !== userId && lockedByUser.id !== '') ||
      userId === undefined
    ) {
      message.error('空间其他成员编辑中，请等待释放编辑权限');
    } else {
      lockModelJson(modelId, 'APP', 'APP', userId).then(() => {
        handleVisualModelDownload(dispatch, visualDiagramRef, modelId, loginUser);
        // 配置工具栏功能
        selectToolbarItems(visualDiagramRef, [
          'unlock', // 解锁
          'plus', // 新增元素
          'zoomIn', // 放大
          'zoomOut', // 缩小
          'disaster', // 模块
          'upload', // 上传
          // 'reorganize', // 整理
          'reuseModel', // 复用模型
          // 'undo', // 撤销
          // 'redo', // 重做
          // 'cut', // 裁剪
        ]);
        dispatch(refreshModelModelCanvasIfLockedState(true));
      });
    }
  });
};
