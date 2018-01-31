import * as mTypes from './mutationsType';
import * as api from '../../api/api';

/**
 * Load posts
 * @param commit
 * @returns {Promise<void>}
 */

export async function loadPosts ({ commit }) {
    const posts = await api.getPost();
    commit(mTypes.LOAD_POSTS, posts);
}

/**
 * Set id post
 * @param commit
 * @param id
 */

export function setId ({ commit }, id) {
    commit(mTypes.SET_ID, id);
}