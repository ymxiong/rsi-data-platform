import type { Actions } from './actions';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import { ElementView } from '@horsecoder/visual-core';


export type StandardModelEntityTitleWrapperProps =  {
  modelVisual: ModelVisual;
  ifFold: boolean;
  setIfFold: (ifFold: boolean) => void;
  element: ElementView;
  onElementChange: (element: ElementView) => void;
};

export type StandardModelEntityTitleProps = {
  actions: Actions;
  modelVisual: ModelVisual;
  ifFold: boolean;
  setIfFold: (ifFold: boolean) => void;
  element: ElementView;
  onElementChange: (element: ElementView) => void;
  title: string;
  setTitle: (title: string) => void;
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
};

