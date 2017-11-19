<template>
  <div :class="clazz">
    <ul :class="$style.items" data-clazz="items">
      <li :class="$style.item" v-for="item in items" :key="item.text">
        <h1 v-if="item.title">{{ item.title }}</h1>

        <ul :class="$style.links" data-clazz="links">
          <li :class="$style.menu" v-for="link in item.links" :key="link.text">
            <a v-if="link.href"
              :href="link.href" :target="link.target || ''">{{ link.text }}</a>
            <router-link v-else
              :to="link.to">{{ link.text }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      items: Array,
      isHorizontal: {
        type: [String, Boolean],
        default: false,
      },
    },
    computed: {
      clazz() {
        return [
          this.$style.menu,
          (this.isHorizontal ? this.$style.horizontal : ''),
        ];
      },
    },
  };
</script>

<style module>
  .menu {
    composes: menu from '../assets/css/theme.css';
    display: flex;
    flex-direction: column;
  }
  .menu:first-child {
    margin-top: 0rem;
  }
  .menu:last-child {
    margin-bottom: 0rem;
  }

  .menu .menu {
    margin: 0;
  }

  .horizontal {
    flex-direction: row;
  }

  .item {
    flex: 0 0 auto;
    user-select: none;
    background: none;
    width: 100%;
  }
  .item h1 {
    font-size: 1.2rem;
  }

  .items {
    list-style-type: none;
    padding-left: 0;
  }
  /*.items li {
    padding-left: 0;
  }*/

  .links {
    list-style-type: none;
    padding-left: 0;
  }


  @media only screen and (max-width: 640px) {
    .menu {
      flex-flow: row wrap;
      justify-content: space-between;
      /*justify-content: space-around;*/
    }

    .horizontal {
      /*background-color: lime;*/
      flex-direction: column;
    }

    /*.item:first-of-type {
      margin-left: 0.8rem;
    }
    .item:last-of-type {
      margin-right: 0.8rem;
    }*/
    .item {
      margin-left: 0.8rem;
      margin-right: 0.8rem;
      width: 120px;
    }
    .item:last-of-type {
      margin-right: 1.4rem;
    }
    /*.item h1 {
      text-align: center;
    }*/

    .items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>
