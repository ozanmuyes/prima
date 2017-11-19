<docs>
  # Affix Component

  *NOTE:* Requires `vue-scrollto` and `vue-waypoint` packages.
</docs>

<template>
  <div :class="clazz">
    <ul :class="$style.list">
      <li v-for="link in links" :key="link.text">
        <a href="#" v-scroll-to="link.to">{{ link.text }}</a>
      </li>
    </ul>

    <br>
    <input type="checkbox" id="app-affix-is-sticky" v-model="isStickyComp">
    <label for="app-affix-is-sticky">Sticky?</label>
  </div>
</template>

<script>
  export default {
    props: {
      links: Array,
      isSticky: {
        type: [Boolean, String],
        default: true,
      },
      activeAnchor: '',
    },
    data() {
      return {
        isStickyComp: this.isSticky,
      };
    },
    computed: {
      clazz() {
        return [
          (this.isStickyComp ? this.$style.sticky : ''),
        ];
      },
    },
    watch: {
      // eslint-disable-next-line
      activeAnchor(oldValue, newValue) {
        if (newValue === '') {
          return;
        }
        // TODO Activate (add 'active' class to) the `newValue` (the anchor of the link)
        // eslint-disable-next-line
        this.$el;
      },
    },
  };
</script>

<style module>
  .list {
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    padding-top: 2rem;
  }

  .sticky {
    position: fixed;
  }
</style>
