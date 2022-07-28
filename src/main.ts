import { createApp } from 'vue'
import './style.css'
import './assets/icons/iconfont/iconfont.css';
import App from './App.vue'
import 'amfe-flexible';
import { Button, Icon ,Tab,Tabs} from 'vant';
import router from '@/router/index';


const app = createApp(App)
app.use(router)
app.use(Button).use(Icon).use(Tab).use(Tabs)


app.mount('#app')
