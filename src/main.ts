import { createApp } from 'vue'
//引入Element-Plus组件库
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入icon图标组件库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './style.css'
//引入App组件
import App from './App.vue'
//引入全局样式文件
import './style/reset.scss'
//引入vue-router核心插件并安装
import router from '@/route'
import hostpitalTop from '@/components/hospital_top/index.vue'
import hostpitalBottom from '@/components/hospital_bottom/index.vue'
// 创建Vue应用实例并挂载到DOM元素上
const app=createApp(App)
app.component('hospital-top', hostpitalTop)
app.component('hospital-bottom', hostpitalBottom)
//安装vue-router插件
app.use(router)
//安装ElementPlus插件
app.use(ElementPlus, {
    locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')


