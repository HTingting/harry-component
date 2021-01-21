import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//引入自己的组件
import notice from './components/notice/index'
//挂载原型上，由于继承关系，所有组件中都能使用this.$notice
Vue.prototype.$notice = notice;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
