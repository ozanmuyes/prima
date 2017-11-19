<template>
  <button
    :class="this.clazz"
    @click="onClick"
  >{{text}}</button>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
      },

      'is-error': {
        type: Boolean,
      },
    },
    computed: {
      clazz() {
        return [
          this.$style.tag,
          (this.isError ? this.$style.error : ''),
        ];
      },
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  };
</script>

<style module>
  .tag {/* .normal */
    background-color: lime;
  }
  .error {
    background-color: red;
  }
</style>
