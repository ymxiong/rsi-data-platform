import type { Actions } from './actions';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';
import { FieldVisual } from '@/standard/VisualModel/FieldVisual';


export type StandardModelEntitySingleItemWrapperProps =  {
  modelVisual: ModelVisual;
  fieldVisual: FieldVisual;
};

export type StandardModelEntitySingleItemProps = {
  actions: Actions;
  modelVisual: ModelVisual;
  fieldVisual: FieldVisual;
};

