import {
    LOAD_STATUS,
    SET_STATUS,
  } from '@/stores/core/types'
  import { ApiService } from '@/services/api'
  
  export const actions = {
    async [LOAD_STATUS]({ commit }) {
      const response = await ApiService.getStatus()
      commit(SET_STATUS, response.data)
    },
  }
  