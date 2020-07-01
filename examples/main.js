import Vue from 'vue'
import router from './router'
// // import Kv from '../lib/kv-ui.common'
import Kv from '../src/index'
// // import '../lib/theme-chalk/index.css'
import '../src/styles/src/index.scss'
import './styles/index.scss'
import App from './App'
import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)

Vue.use(Kv)
new Vue({
    el:'#app',
    router,
    render:(h)=>h(App)
})

