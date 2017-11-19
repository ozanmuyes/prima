<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>
  /* small screens (<= 640 px) */
  body {
    font-size: 14px;
  }
  /* medium screens (> 640 px & <= 1024 px) */
  @media only screen and (min-width: 641px) {
    body {
      font-size: 15px;
    }
  }
  /* large screens (> 1024 px & <= 1440 px) */
  @media only screen and (min-width: 1025px) {
    body {
      font-size: 16px;
    }
  }
  /* xlarge screens (> 1440 px & <= 1920 px) */
  @media only screen and (min-width: 1441px) {
  }
  /* xxlarge screens (> 1920 px) */
  @media only screen and (min-width: 1921px) {
    body {
      font-size: 17px;
    }
  }

</style>
