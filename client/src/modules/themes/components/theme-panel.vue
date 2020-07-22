<template>
  <div class="theme-panel">
    <themes-list :themes="themes"/>
  </div>
</template>

<script>
import { ThemesMixin } from "@/mixins/themes";
import ThemesList from "@/modules/themes/components/theme-list";

export default {
  name: "theme-panel",
  components: {
    ThemesList,
  },
  mixins: [ThemesMixin],
  async mounted() {
    await this.actionReset();
  },
};
</script>

<style lang="scss">
.theme-panel {
  display: flex;
  position: absolute;
  right: 0;
}
</style>
