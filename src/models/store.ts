import type { LoginModelState } from '@/xpages/Login/models/types';
import LoginModel from '@/xpages/Login/models/reducer';

import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';
import { loadAll } from "@/src/flows/flows";

setAutoFreeze(false);
loadAll();
export type ComponentState = {
};

export type LayoutState = {
};

export type PageState = {
  Login: LoginModelState,
};


export const store = configureStore({
  reducer: {
    Login: LoginModel.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;