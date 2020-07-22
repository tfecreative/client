import { mutations } from "@/stores/themes/mutations";
import { actions } from "@/stores/themes/actions";
import { getters } from "@/stores/themes/getters";
import { state } from "@/stores/themes/state";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
