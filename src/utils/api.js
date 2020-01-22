import axios from 'axios';

const buildRequest = (method) => (url, data) => axios({ method, url, data });

const get = buildRequest('get');
const post = buildRequest('post');

export { get, post };
