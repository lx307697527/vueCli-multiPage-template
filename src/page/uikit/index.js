import 'assets/styles/app.less';
import Vue from 'vue';

import App from './index.vue';
import router from 'router/uikit-router';

if (process.env.NODE_ENV === 'development') {
  const modules = require.context('data', true, /mock\.js/);
  modules.keys().forEach(key => modules(key));
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});


