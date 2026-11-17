import type { Actions } from './actions';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import { Pendant, ElementView } from '@horsecoder/visual-core';


export type StandardModelEntityWrapperProps =  {
};

export type StandardModelEntityProps = {
  actions: Actions;
  modelVisual: ModelVisual;
  pendant: Pendant | undefined;
  element: ElementView;
  onElementChange: (element: ElementView) => void;
  ifFold: boolean;
  setIfFold: (ifFold: boolean) => void;
};

