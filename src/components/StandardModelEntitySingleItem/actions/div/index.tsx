import { onStartDrawingLine } from './onStartDrawingLine';
import { onEndDrawingLine } from './onEndDrawingLine';
import React from 'react';
import type { Dispatch } from 'redux';
import { FieldVisual } from '@/standard/VisualModel/FieldVisual';
import { ModelVisual } from '@/standard/VisualModel/ModelVisual';

export type EventsDiv = {
  onMouseDown: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  onMouseUp: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
};

export const eventsDiv = (
  dispatch: Dispatch,
  fieldVisual: FieldVisual,
  modelVisual: ModelVisual,
): EventsDiv => {
  return {
    onMouseDown: (event) => onStartDrawingLine(event, dispatch, fieldVisual, modelVisual),
    onMouseUp: (event) => onEndDrawingLine(event, dispatch, fieldVisual, modelVisual),
  };
};
