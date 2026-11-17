import type { Reducer } from 'umi';
import type { LoginModelState } from './types';
import { defaultState } from './types';

export interface LoginModelType {
  namespace: 'Login';
  state: LoginModelState;
  reducers: {
    refreshPageState: Reducer<LoginModelState>;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'Login',
  state: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
};

export default LoginModel;
