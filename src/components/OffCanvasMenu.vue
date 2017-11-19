<template>
  <div :class="clazz">
    <!-- TODO Menu here -->
  </div>
</template>

<script>
  export default {
    props: {
      isMenuOpen: {
        type: [Boolean, String],
        default: false,
      },
    },
    computed: {
      clazz() {
        return [
          this.$style.menu,
          (this.isMenuOpen ? this.$style.open : ''),
        ];
      },
    },
  };
</script>

<style module>
  .menu {
  }
</style>
