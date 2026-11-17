import { onSelectEventNode } from './onSelectEventNode';
import type { Dispatch } from 'redux';
import type { Setter } from '../../setter';

export type EventsDivDiv0 = {
  onClick: (
    event: any,
  ) => void;
};

export const eventsDivDiv0 = (
  setter: Setter,
  dispatch: Dispatch,
): EventsDivDiv0 => {
  return {
    onClick: (event) => onSelectEventNode(event, setter, dispatch),
  };
};
