<template>
  <nav :class="$style.nav" role="banner">
    <ul :class="$style.list">
      <li v-for="link in links">
        <a v-if="link.href"
          :href="link.href" :target="link.target || ''">{{ link.text }}</a>
        <router-link v-else
          :to="link.to">{{ link.text }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: {
      links: Array,
    },
  };
</script>

<style module>
  .nav {
    height: 100%;
  }

  .list {
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
  }
  .list li {
    height: 100%;
    /*height: 80%;*/
    margin-left: 4px;
    margin-right: 4px;
    padding-left: 8px;
    padding-right: 8px;
  }
  /*.list li:first-of-type {
    padding-left: 0;
  }
  .list li:last-of-type {
    padding-right: 0;
  }*/
  .list li a {
    display: block;
    height: 100%;
    line-height: 4rem;
  }
</style>
