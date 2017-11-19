import Vue from 'vue';
import Router from 'vue-router';

import LeftMenuLayout from '@/layouts/left-menu';
// import OffCanvasLayout from '@/layouts/off-canvas';
import ArticleLayout from '@/layouts/article';

import IndexPage from '@/pages/index';
import ButtonPage from '@/pages/wrapper/button';
import GuidePage from '@/pages/guide';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/components',
      // component: OffCanvasLayout,
      component: LeftMenuLayout,
      children: [
        {
          path: 'button',
          component: ButtonPage,
        },
        //
      ],
    },
    {
      path: '/guide',
      component: ArticleLayout,
      children: [
        { path: '', component: GuidePage },
      ],
    },
    //
  ],
});
