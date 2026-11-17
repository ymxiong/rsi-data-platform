import { register, load } from '@horsecoder/flow';
import { loadMy } from './flows_my';

export const loadAll = async () => {
  loadMy();
}
