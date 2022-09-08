import { createApp } from 'vue'
import './style.css'
import 'vant/lib/index.css'
import './assets/icons/iconfont/iconfont.css';
import App from './App.vue'
import 'amfe-flexible';
import { Button, Icon, Tab, Tabs, TreeSelect, Stepper, ActionBar, ActionBarIcon, ActionBarButton, Popup, Checkbox, CheckboxGroup, SubmitBar, ContactCard, Card, Dialog, AddressList, AddressEdit, Form, Field, CellGroup} from 'vant';
import router from '@/router/index';
import store from '@/store/index';


const app = createApp(App)
app.use(router)
app.use(store)
app.use(Button).use(Popup).use(Icon).use(Tab).use(Tabs).use(TreeSelect).use(Stepper).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(ContactCard).use(Card).use(Dialog).use(AddressList).use(AddressEdit).use(Field).use(CellGroup).use(Form);
app.mount('#app')
