import { onDoubleClickCollapse } from './onDoubleClickCollapse';
import React from 'react';
import { ElementView } from '@horsecoder/visual-core';
import type { Setter } from '../../setter';

export type EventsDiv = {
  onDoubleClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
};

export const eventsDiv = (
  setter: Setter,
  ifFold: boolean,
  setIfFold: (ifFold: boolean) => void,
  element: ElementView,
  onElementChange: (element: ElementView) => void,
): EventsDiv => {
  return {
    onDoubleClick: (event) => onDoubleClickCollapse(event, setter, ifFold, setIfFold, element, onElementChange),
  };
};
