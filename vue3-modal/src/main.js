import { createApp } from 'vue';
import App from '@/App.vue';
import '@/style.scss';
import Modal from 'vue3-modal-dialog';
import '../node_modules/vue3-modal-dialog/dist/modal.css';
import '../node_modules/vue3-modal-dialog/dist/modal-transitions.css';

createApp(App)
    .use(Modal)
    .mount('#app')
