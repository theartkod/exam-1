import Vue from 'vue';
import App from './App.vue';
import router from './routes/index'
const app = new Vue({
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
