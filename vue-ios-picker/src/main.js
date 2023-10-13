import { createApp } from 'vue';
import App from '@/App.vue';
import {createRouter, createWebHistory} from "vue-router";
import BasicUsage from "@/Basic/BasicUsage.vue";
import Home from "@/Home.vue";
import '@/style.scss';
import IosPicker from 'vue3-ios-picker';
import '../node_modules/vue3-ios-picker/dist/ios-picker.css';
import DividerUsage from "@/Divider/DividerUsage.vue";
import DateTime from "@/DateTime/DateTime.vue";
import VueLazyload from "vue-lazyload";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/basic',
            component: BasicUsage
        },
        {
            path: '/divider',
            component: DividerUsage
        },
        {
            path: '/datetime',
            component: DateTime
        }
    ]
});

createApp(App)
    .use(router)
    .use(IosPicker)
    .use(VueLazyload, {
        preLoad: 1.3,
        error: 'https://via.placeholder.com/300x300?text=Error',
        loading: 'https://via.placeholder.com/300x300?text=Loading',
        attempt: 1
    })
    .mount('#app')
