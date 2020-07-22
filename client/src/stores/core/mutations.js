import { SET_STATUS } from "@/stores/core/types";
import { setState } from '@/stores/shared'

export const mutations = {
  [SET_STATUS]: setState('status'),
};
