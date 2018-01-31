import Vue from 'vue';
import App from './App.vue';
import router from './routes/index'
import store from './store/index'
const app = new Vue({
    router,
    store,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
