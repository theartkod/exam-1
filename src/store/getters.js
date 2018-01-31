export default {
    post (state) {
        return state.posts.filter(item => item.id === state.id)[0];
    },
};
