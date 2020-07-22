import { mutations } from "@/stores/core/mutations";
import { actions } from "@/stores/core/actions";
import { getters } from "@/stores/core/getters";
import { state } from "@/stores/core/state";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
