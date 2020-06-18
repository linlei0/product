import Vue from 'vue'
import App from './App.vue'
import { Image as VanImage, Lazyload,ImagePreview  } from 'vant';
import './styles/index.scss'
Vue.config.productionTip = false
Vue.use(Lazyload )
.use(VanImage)
.use(ImagePreview)
new Vue({
  render: h => h(App),
}).$mount('#app')
