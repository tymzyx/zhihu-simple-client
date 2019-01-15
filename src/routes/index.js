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
import testView from '../pages/test/view'
import drag from '../pages/test/testDrag'

let route = new Router({
  mode: 'history',
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
    },
    {
      path: '/testView',
      name: 'testView',
      component: testView
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
});

export default route;
