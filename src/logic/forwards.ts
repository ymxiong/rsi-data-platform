import { history } from 'umi';

type Query = Record<string, string | string[] | null>;
type State = Record<string, unknown>;

export const forward_ = (params?: { query?: Query, state?: State }) => {
  history.push({ pathname: "/", ...params});
};

