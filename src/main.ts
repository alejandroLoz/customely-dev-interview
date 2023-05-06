import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueAwesomePaginate from "vue-awesome-paginate";

const pinia = createPinia();
const app = createApp(App);

app.use(VueAwesomePaginate);
// import "vue-awesome-paginate/dist/style.css";

app.use(pinia);
app.use(router)

app.mount('#app')
