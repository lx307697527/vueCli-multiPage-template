// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'assets/styles/app.less';
// import 'babel-polyfill';
import Vue from 'vue';
// import Api from 'components/utils/Api';
// import Wex from 'components/utils/Wex';
// import MerchantAccount from 'components/utils/MerchantAccount'
// import ScriptData from 'components/ScriptData';
// import Validation from 'vuelidate';
// import moment from 'moment';

// 兼容ie
if (!window.console || !console) {
  window.console = {
    log: () => {}
  }
}


export default function (App, router) {

  if (process.env.NODE_ENV === 'development') {
    const modules = require.context('data', true, /mock\.js/);
    modules.keys().forEach(key => modules(key));
  } else if (process.env.NODE_ENV === 'production') {
    console.log('****************************');
    console.log('*         DIST TIME        *');
    console.log('*   ' + DISTTIME + '    *');
    console.log('****************************');
  }

  new Vue({
    el: '#app',
    template: '<App/>',
    router,
    filters: {
      capitalize(value) {

        return value;
      }
    },
    components: {
      App,
    },
  });
}
