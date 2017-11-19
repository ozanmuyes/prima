<template>
  <div :class="$style.layout">
    <app-header :items="nav"></app-header>

    <aside>
      <app-menu :items="menu"/>
    </aside>

    <router-view></router-view>

    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';
  import AppMenu from '@/components/AppMenu';
  import AppFooter from '@/components/AppFooter';

  import NavItems from '@/nav';

  export default {
    components: {
      AppHeader,
      AppMenu,
      AppFooter,
    },
    data() {
      return {
        nav: NavItems,
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
      };
    },
  };
</script>

<style module>
  /* small screens (<= 640 px) */
  .layout {
    display: grid;

    grid-template-columns: 1fr;
    grid-template-areas: "header"
                         "menu"
                         "main"
                         "footer";
  }
  /* medium screens (> 640 px & <= 1024 px) */
  @media only screen and (min-width: 641px) {
    .layout {
      grid-template-columns: minmax(min-content, 300px) 1fr;
      grid-template-areas: "header header"
                           "menu main"
                           "footer footer";
      grid-template-rows: 80px 1fr 68px;
    }
  }
  /* large screens (> 1024 px & <= 1440 px) */
  @media only screen and (min-width: 1025px) {
    .layout {
      grid-template-columns: minmax(241px, 300px) repeat(3, 1fr);
      grid-template-areas: "header header header header"
                           "menu main main main"
                           "menu footer footer footer";
    }
  }
  /* xlarge screens (> 1440 px & <= 1920 px) */
  @media only screen and (min-width: 1441px) {
  }
  /* xxlarge screens (> 1920 px) */
  @media only screen and (min-width: 1921px) {
  }

  header {
    grid-area: header;
  }

  aside {
    grid-area: menu;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }
</style>
