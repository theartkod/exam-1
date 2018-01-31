import * as mTypes from './mutationsType';

export default {
    [mTypes.LOAD_POSTS] (state, data) {
        state.posts = data.data.tiles;
    },
    [mTypes.SET_ID] (state, id) {
        state.id = id;
    }
}
