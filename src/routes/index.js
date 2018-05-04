import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import sign from '../pages/sign'
import home from '../pages/home'
import topic from '../pages/topic'
import discovery from '../pages/discovery'
import message from '../pages/message'
import testPage from '../pages/test'
import test from '../components/common/TestEditor'

let route = new Router({
  routes: [
    {
      path: '/sign',
      name: 'sign',
      component: sign
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/topic',
      name: 'topic',
      component: topic
    },
    {
      path: '/discovery',
      name: 'discovery',
      component: discovery,
      alias: '/'
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/test',
      name: 'test',
      component: testPage
    }
  ]
});

export default route;
