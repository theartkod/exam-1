import axios from 'axios';

/**
 * Get post
 */

export function getPost () {
    return axios.get('/api/tiles');
}