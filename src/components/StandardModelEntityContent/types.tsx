import { ModelVisual } from '@/standard/VisualModel/ModelVisual';


export type StandardModelEntityContentWrapperProps =  {
  modelVisual: ModelVisual;
};

export type StandardModelEntityContentProps = {
  modelVisual: ModelVisual;
  fields: FieldVisual[];
  setFields: (fields: FieldVisual[]) => void;
};

