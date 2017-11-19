<template>
  <div :class="clazz">
    <app-header></app-header>

    <aside>
      <off-canvas-menu :is-open="isMenuOpen"/>
    </aside>

    <router-view></router-view>

    <footer>
      <button @click="isMenuOpen = !isMenuOpen">toggle</button>
      foot yourself in the shot again
    </footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';
  import OffCanvasMenu from '@/components/OffCanvasMenu';

  export default {
    components: {
      AppHeader,
      OffCanvasMenu,
    },
    data() {
      return {
        menu: [
          {
            title: 'Products',
            links: [
              { text: 'Enterprise', href: 'http://www.google.com/?q=enterprise', target: '_blank' },
              { text: 'Consumer', href: 'http://www.google.com/?q=consumer' },
            ],
          },
          {
            title: 'CMS Solutions',
            links: [
              { text: 'Rails', href: 'http://www.google.com/?q=rails', target: '_blank' },
              { text: 'Python', href: 'http://www.google.com/?q=python', target: '_blank' },
              { text: 'PHP', href: 'http://www.google.com/?q=php', target: '_blank' },
            ],
          },
          {
            title: 'Wrapper',
            links: [
              { text: 'Button', to: { path: '/wrapper/button' } },
              { text: 'Python', href: 'http://www.google.com/?q=python' },
              { text: 'PHP', href: 'http://www.google.com/?q=php' },
            ],
          },
          {
            title: 'Base',
            links: [
              { text: 'Input Group', to: { path: '/base/input-group' } },
              { text: 'Python', href: 'http://www.google.com/?q=python' },
              { text: 'PHP', href: 'http://www.google.com/?q=php' },
            ],
          },
        ],
        isMenuOpen: false,
      };
    },
    computed: {
      clazz() {
        return [
          this.$style.layout,
          (this.isMenuOpen ? this.$style.open : ''),
          //
        ];
      },
    },
  };
</script>

<style module>
  .layout {
    display: grid;

    grid-template-columns: 50px 1fr;
    grid-template-areas: "menu header"
                         "menu main"
                         "menu footer";
  }
  .layout.open {
    grid-template-columns: 100px 1fr;
  }

  header {
    grid-area: header;
  }

  aside {
    grid-area: menu;

    transition-property: width;
    transition-duration: 1s;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
</style>
