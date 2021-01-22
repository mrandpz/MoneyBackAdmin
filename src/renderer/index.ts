import { createApp } from 'vue';
import 'element3/lib/theme-chalk/index.css';
import Element3 from 'element3';
import App from './App.vue';
import router from '@/router';
import store from '@/store';

createApp(App).use(Element3).use(router).use(store).mount('#app');
