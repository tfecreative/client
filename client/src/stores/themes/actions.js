import { RESET, SET_THEME } from "@/stores/themes/types";

export const actions = {
  async [SET_THEME]({ commit }, payload) {
    commit(SET_THEME, payload);
  },
  async [RESET]({ commit }) {
    commit(RESET);
  },
};
