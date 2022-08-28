import { createApp } from 'vue'
import './style.css'
import './assets/icons/iconfont/iconfont.css';
import App from './App.vue'
import 'amfe-flexible';
import { Button, Icon, Tab, Tabs, TreeSelect, Stepper, ActionBar, ActionBarIcon, ActionBarButton, Toast, Popup, Checkbox, CheckboxGroup, SubmitBar, ContactCard } from 'vant';
import router from '@/router/index';
import store from '@/store/index';


const app = createApp(App)
app.use(router)
app.use(store)
app.use(Button).use(Toast).use(Popup).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(ContactCard);
app.mount('#app')
