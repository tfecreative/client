<template>
  <header class="tfe-header">
    <router-link tag="span" class="tfe-header__title" :to="{ name: 'Home' }"
      >tfeCreative</router-link
    >
  </header>
</template>

<script>
export default {
  name: "tfe-header",
  methods: {
    onHeaderClick() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
