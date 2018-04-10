import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import discovery from '../pages/discovery'
import testPage from '../pages/test'
import test from '../components/common/TestEditor'

let route = new Router({
  routes: [
    {
      path: '/discovery',
      name: 'discovery',
      component: discovery,
      alias: '/'
    },
    {
      path: '/test',
      name: 'test',
      component: testPage
    }
  ]
});

export default route;
