<template>
  <div>
    <h1>Hello, I am just an HTML tag</h1>
    <p>
      I am a normal HTML <code>p</code> tag, but the button below is a<br>
      visual component. A <span class="bold">Vue component</span>.
    </p>

    <base-button text="Click me!" :is-error="this.btn1.isError" @click="btn1Clicked"></base-button>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton';

  export default {
    components: {
      BaseButton,
    },
    data() {
      return {
        btn1: {
          isError: false,
        },
      };
    },
    methods: {
      btn1Clicked() {
        // // eslint-disable-next-line
        // alert('You\'ve clicked me for real!!1');

        const oldValue = !!this.btn1.isError;
        this.btn1.isError = !oldValue;
      },
    },
  };
</script>

<style scope>
  .bold {
    font-weight: 600;
  }
</style>
