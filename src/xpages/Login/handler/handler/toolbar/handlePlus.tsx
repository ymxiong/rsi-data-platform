import { refreshModelPageVisualModelState } from '@/pages/Model/models/action';
import { VisualModel } from '@/standard/VisualModel/VisualModel';
import { handleModelCreate } from '../handleModelCreate';
import { Dispatch } from 'redux';

export const handlePlus = (
  dispatch: Dispatch,
  visualDiagramRef: any,
  visualModel: VisualModel | undefined,
): void => {
  if (visualModel) {
    const model = handleModelCreate(visualDiagramRef, visualModel);
    dispatch(refreshModelPageVisualModelState(model));
  }
};
