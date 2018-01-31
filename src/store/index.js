import Vuex from 'vuex';
import Vue from 'vue';
import mutations from './mutations';
import * as actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        id: 0,
    },
    mutations,
    actions,
    getters
});
