import Vue from 'vue';
import VueRouter from 'vue-router';
import post from '../components/post.vue';
import cards from '../components/cards.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: cards,
        },
        {
            path: '/post/:id',
            component: post,
        }
    ],
});

export default router;
