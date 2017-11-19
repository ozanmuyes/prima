<template>
  <header :class="$style.header">
    <!-- this is header depicting...
    <a :class="$style.link" href="#">foo</a> -->
    <slot name="head"></slot>

    <app-nav :links="items"></app-nav>
  </header>
</template>

<script>
  import AppNav from '@/components/AppNav';

  export default {
    components: {
      AppNav,
    },
    props: {
      items: Array,
    },
  };
</script>

<style module>
  /* small screens (<= 640 px) */
  .header {
    composes: header from '../assets/css/theme.css';
    composes: header from '../assets/css/typography.css';

    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "logo"
                         "nav";
  }
  /* medium screens (> 640 px & <= 1024 px) */
  @media only screen and (min-width: 641px) {
    .header {
      grid-template-columns: 1fr 3fr;
      grid-template-areas: "logo nav";
    }
  }
  /* large screens (> 1024 px & <= 1440 px) */
  @media only screen and (min-width: 1025px) {
    .header {
      grid-template-columns: 1fr 2fr 3fr 4fr;
      grid-template-areas: ". logo . nav";
    }
  }

  .link {
    composes: headerLinks from '../assets/css/typography.css';
    color: red;
  }

  nav {
    grid-area: nav
  }
</style>
