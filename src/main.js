import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './../src/assets/css/reset.css'

//import mcommon from '@hanyk/mcommon'

Vue.use(ElementUI);
//Vue.use(mcommon);

import MForm from './components/formTool/MForm'
import MItem from './components/formTool/MItem'
import MSelect from './components/formTool/MSelect'

Vue.component(MForm.name, MForm)
Vue.component(MItem.name, MItem)
Vue.component(MSelect.name, MSelect)

import ElInput from './components/myinput/index'
Vue.use(ElInput);
//Vue.use(ElInput);



//引入自己的组件
import notice from './components/notice/index'
//挂载原型上，由于继承关系，所有组件中都能使用this.$notice
Vue.prototype.$notice = notice;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
