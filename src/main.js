import Vue from 'vue';

import VueScrollTo from 'vue-scrollto';
import VueWaypoint from 'vue-waypoint';

import App from './App';
import router from './router';

// import AppContainer from './components/AppContainer';
//

import '../static/css/normalize.min.css';

Vue.config.productionTip = false;

// @see https://github.com/rigor789/vue-scrollto#as-a-vue-directive
Vue.use(VueScrollTo);
Vue.use(VueWaypoint);

// Vue.component('app-container', AppContainer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
