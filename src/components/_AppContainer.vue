<template>
  <div class="container">
    <!-- TODO Add slot here -->
  </div>
</template>

<script>
  export default {
    props: {
      isFluid: {
        type: [String, Boolean],
      },
    },
    computed: {
      clazz() {
        return [
          this.$style.container,
          (this.isFluidProp ? this.$style.fluid : ''),
        ];
      },
    },
  };
</script>

<style module>
  .container {
    display: block;
    max-width: 100% !important;
  }

  .fluid {
    width: 100%;
  }
</style>
