<template>
  <div :class="$style.layout">
    <app-header :items="nav"></app-header>

    <main :class="$style.main">
      <div id="content">
        <router-view @waypoint="updateAffixActiveAnchor"></router-view>
      </div>

      <aside>
        <app-affix :links="affix" :active-anchor="affixActiveAnchor"/>
      </aside>
    </main>

    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader';
  import AppAffix from '@/components/AppAffix';
  import AppFooter from '@/components/AppFooter';

  import NavItems from '@/nav';

  export default {
    components: {
      AppHeader,
      AppAffix,
      AppFooter,
    },
    data() {
      return {
        nav: NavItems,
        affix: [
          {
            text: 'Introduction',
            to: '#intro',
          },
          {
            text: 'Theming',
            to: '#theming',
            links: [
              { text: 'Colors and Variables', to: '#colors-and-variables' },
              { text: 'Blah', to: '#blah' },
              //
            ],
          },
          {
            text: 'Guideline',
            to: '#guideline',
            links: [
              { text: 'Use of Functional Components', to: '#functional-components' },
              //
            ],
          },
          //
        ],
        affixActiveAnchor: '',
      };
    },
    methods: {
      updateAffixActiveAnchor({ anchor }) {
        this.affixActiveAnchor = anchor;
      },
    },
  };
</script>

<style module>
  /* small screens (<= 640 px) */
  .layout {
    display: grid;

    grid-template-columns: 1fr;
    grid-template-areas: "header"
                         "main"
                         "footer";
  }
  .main {
    display: grid;

    grid-template-columns: 7fr 2fr;
    grid-template-areas: "content affix";
  }
  /* medium screens (> 640 px & <= 1024 px) */
  @media only screen and (min-width: 641px) {
    .layout {
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas: "header header header header header header"
                           ". main main main main main"
                           "footer footer footer footer footer footer";
      grid-template-rows: 80px 1fr 68px;
    }
    .main {
      grid-template-columns: 3fr 1fr;
    }
  }
  /* large screens (> 1024 px & <= 1440 px) */
  @media only screen and (min-width: 1025px) {
    .layout {
      grid-template-columns: repeat(4, 1fr);
      grid-template-areas: "header header header header"
                           ". main main main"
                           "footer footer footer footer";
    }
    .main {
      grid-template-columns: 2fr 1fr;
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

  main #content {
    grid-area: content;
  }

  main aside {
    grid-area: affix;
  }
</style>
