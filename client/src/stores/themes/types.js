export const STORE_KEY = "$themes";

export const SET_THEME = "SET_THEME";
export const RESET = "RESET";

export const GET_THEME_CLASS_NAME = "GET_THEME_CLASS_NAME"

export const THEME_KEY = "THEME"

export const THEMES = Object.freeze({
  Light: {
    id: 1,
    name: "Light",
    className: "theme--light",
  },
  Dark: {
    id: 2,
    name: "Dark",
    className: "theme--dark",
  },
});
