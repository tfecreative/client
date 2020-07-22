import { RESET, SET_THEME, THEME_KEY, THEMES } from "@/stores/themes/types";
import { getObject, setObject } from '@/stores/shared'

export const mutations = {
  [SET_THEME]: (state, payload) => {
    state.theme = payload
    setObject(state.theme)
  },
  [RESET]: (state) => {
    const theme = getObject(THEME_KEY) || THEMES.Light
    state.theme = setObject(theme)
  }
};
