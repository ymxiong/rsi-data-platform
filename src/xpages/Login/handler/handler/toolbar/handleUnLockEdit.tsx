import { getAppLockedBy } from '@/standard/AppStandard/AppStandard';
import { unlockModelJson } from '@/standard/request/model';
import { message } from 'antd';
import Cookies from 'js-cookie';
import { selectToolbarItems } from '../diagramHandler';
import { refreshModelModelCanvasIfLockedState } from '@/pages/Model/models/action';

export const handleUnLockEdit = (dispatch: any, visualDiagramRef: any, modelId: string): void => {
  getAppLockedBy(modelId).then(lockedByUser => {
    const userId = Cookies.get('userId');
    if (
      (lockedByUser !== undefined && lockedByUser.id !== userId && lockedByUser.id !== '') ||
      userId === undefined
    ) {
      message.error('空间其他成员编辑中，您无法释放编辑权限');
    } else {
      unlockModelJson(modelId, 'APP', 'APP').then(() => {
        // 配置工具栏功能
        selectToolbarItems(visualDiagramRef, [
          'lock', // 锁定
          'zoomIn', // 放大
          'zoomOut', // 缩小
        ]);
        dispatch(refreshModelModelCanvasIfLockedState(false));
      });
    }
  });
};
