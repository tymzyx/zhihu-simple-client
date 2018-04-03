import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import discovery from '../pages/discovery'

let route = new Router({
  routes: [
    {
      path: '/discovery',
      name: 'discovery',
      component: discovery,
      alias: '/'
    }
  ]
});

export default route;
