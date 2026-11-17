import type { PageState } from './types';

export const refreshLoginPageState = (state: PageState) => ({
  type: 'Login/refreshPageState',
  payload: { ...state },
});
