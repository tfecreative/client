import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from '@/stores/mutations'
import { actions } from '@/stores/actions'
import { getters } from '@/stores/getters'
import { state } from '@/stores/state'
import coreStore from '@/stores/core'
import themesStore from '@/stores/themes'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  modules: {
    $core: coreStore,
    $themes: themesStore,
  },
  actions,
  getters,
  mutations
})
