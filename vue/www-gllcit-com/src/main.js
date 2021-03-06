import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

import BoxTitleBar from './components/BoxTitleBar'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.component('box-title-bar', BoxTitleBar);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
