import {
  STORE_KEY,
  GET_THEME_CLASS_NAME,
  RESET,
  SET_THEME,
} from "@/stores/themes/types";
import { mapActions, mapGetters, mapState } from "vuex";

export const ThemesMixin = {
  computed: {
    ...mapGetters(STORE_KEY, {
      themeClassName: GET_THEME_CLASS_NAME,
    }),
    ...mapState(STORE_KEY, {
      theme: (state) => state.theme,
      themes: (state) => state.themes,
    }),
  },
  methods: {
    ...mapActions(STORE_KEY, {
      actionReset: RESET,
      actionSetTheme: SET_THEME,
    }),
  },
};
