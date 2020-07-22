import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { THEMES } from "@/stores/themes/types";
import ThemeList from "@/modules/themes/components/theme-list.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("theme-list.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      SET_THEME: jest.fn(),
      RESET: jest.fn(),
    };
    store = new Vuex.Store({
      modules: {
        $themes: {
          namespaced: true,
          state: { themes: THEMES },
          actions,
        },
      },
    });
  });

  it("dispatches setTheme event on theme click", () => {
    const wrapper = shallowMount(ThemeList, { store, localVue });
    const theme = wrapper.find("li");
    theme.trigger("click");
    expect(actions.SET_THEME).toHaveBeenCalled();
  });
});
