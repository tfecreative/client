import { STORE_KEY, LOAD_STATUS } from "@/stores/core/types";
import { mapActions, mapState } from "vuex";

export const CoreMixin = {
  computed: {
    ...mapState(STORE_KEY, {
      status: (state) => state.status,
    }),
  },
  methods: {
    ...mapActions(STORE_KEY, {
      actionLoadStatus: LOAD_STATUS,
    }),
  },
};
