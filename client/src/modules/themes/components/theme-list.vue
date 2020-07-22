<template>
  <ul class="theme-list">
    <li
      class="theme-list__item"
      v-for="(theme, index) in themes"
      :key="`theme-${index}`"
      @click="actionSetTheme(theme)"
      :id="`theme-${theme.id}`"
    >
      <span> {{ theme.name }}</span>
    </li>
  </ul>
</template>

<script>
import { ThemesMixin } from "@/mixins/themes";

export default {
  name: "theme-list",
  mixins: [ThemesMixin],
};
</script>

<style lang="scss">
.theme-list {
  display: flex;
  &__item {
    padding: $spacing-xxs;
    font-weight: $font-weight-bold;

    &:hover {
      cursor: pointer;
    }

    &:not(:last-of-type) {
      margin-right: $spacing-sm;
    }
  }
}
</style>
