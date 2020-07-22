<template>
  <div id="app" :class="themeClassName">
    <theme-panel/>
    <tfe-header/>
    <div class="site-content">
      <router-view />
    </div>
    <tfe-footer/>
  </div>
</template>

<script>
import TfeFooter from "@/modules/layout/tfe-footer";
import TfeHeader from "@/modules/layout/tfe-header";
import ThemePanel from "@/modules/themes/components/theme-panel"
import { ThemesMixin } from "@/mixins/themes";

export default {
  name: "App",
  mixins: [ThemesMixin],
  components: {
    TfeFooter,
    TfeHeader,
    ThemePanel,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
