import { THEMES, THEME_KEY } from "@/stores/themes/types";
import { getObject, setObject } from "@/stores/shared";

const theme = getObject(THEME_KEY) || THEMES.Light;
setObject(theme);

export const state = {
  theme: theme,
  themes: THEMES,
};
