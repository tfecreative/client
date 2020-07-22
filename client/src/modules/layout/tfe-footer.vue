<template>
  <footer class="tfe-footer">
    <dl class="inline status">
      <dt class="status__key">Status</dt>
      <dd class="status__value">{{ status.status }}</dd>
      <dt class="status__key">Env</dt>
      <dd class="status__value">{{ status.environment }}</dd>
    </dl>
  </footer>
</template>

<script>
import { CoreMixin } from "@/mixins/core";

export default {
  name: "tfe-footer",
  mixins: [CoreMixin],
  async mounted() {
    await this.actionLoadStatus();
  },
};
</script>
