import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Form, Input, Icon, Layout, Menu, Breadcrumb, List, Skeleton, Divider, Tag, message } from 'ant-design-vue'

import { BunAxios } from './utils/request'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(List)
Vue.use(Skeleton)
Vue.use(Divider)
Vue.use(Tag)

// axios -> Vue.$http or this.$http
Vue.use(BunAxios)

Vue.prototype.$message = message

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
