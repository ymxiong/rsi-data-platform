import { VisualToolbarConfig, VisualToolbarProps, PendantData } from '@horsecoder/visual-core';
import disasterIcon from '@/assets/disaster.svg';
import lockIcon from '@/assets/lock.svg';
import unlockIcon from '@/assets/unlock.svg';
import reuseIcon from '@/assets/reuse.svg';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { handleLockEdit } from './handleLockEdit';
import { handleUnLockEdit } from './handleUnLockEdit';
import { handleReorganize } from './handleReorganize';
import { handlePlus } from './handlePlus';
import { handleUpload } from './handleUpload';
import { handleDisaster } from './handleDisaster';
import { Setter } from '../../setter';
import { User } from '@/types/com.horsecoder.identity/sys/User';

const toolbarPlus = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'plus',
    onClick,
    icon: 'plus',
    tips: '新增',
  };
};

const toolbarUpload = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'upload',
    onClick,
    icon: 'upload',
    tips: '保存',
  };
};

const toolbarDisaster = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'disaster',
    onClick,
    icon: disasterIcon,
    tips: '模块',
  };
};

const toolbarLockEdit = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'lock',
    onClick,
    icon: lockIcon,
    tips: '锁定编辑权限',
  };
};

const toolbarUnLockEdit = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'unlock',
    onClick,
    icon: unlockIcon,
    tips: '释放编辑权限',
  };
};

const toolbarReorganize = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'reorganize',
    onClick,
    icon: 'sort',
    tips: '整理',
  };
};

const toolbarReuseModel = (onClick: () => void): VisualToolbarProps => {
  return {
    id: 'reuseModel',
    onClick,
    icon: reuseIcon,
    tips: '复用模型',
  };
};

export const canvasToolbarConfig = (
  dispatch: any,
  setter: Setter,
  visualDiagramRef: any,
  modelId: string,
  visualModel: VisualModel | undefined,
  loginUser: User,
): VisualToolbarConfig => [
  toolbarPlus(() => handlePlus(dispatch, visualDiagramRef, visualModel)),
  toolbarUpload(() => handleUpload(visualDiagramRef, visualModel, modelId, loginUser)),
  toolbarDisaster(() => handleDisaster(dispatch)),
  toolbarReorganize(() => handleReorganize()),
  toolbarLockEdit(() => handleLockEdit(dispatch, visualDiagramRef, modelId, loginUser)),
  toolbarUnLockEdit(() => handleUnLockEdit(dispatch, visualDiagramRef, modelId)),
  toolbarReuseModel(() => {
    setter.setModelConfigDialogVisible(true);
  }),
];
