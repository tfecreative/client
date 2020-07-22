import { GET_THEME_CLASS_NAME } from "@/stores/themes/types";

export const getters = {
  [GET_THEME_CLASS_NAME]: (state) =>
    state.theme ? state.theme.className : "theme--default",
};
