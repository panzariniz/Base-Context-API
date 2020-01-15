import client from './client';

const AUTH = params => client.post('/login', params);
const LOGOUT = params => client.post('/logout', params);

export default {
  auth: AUTH,
  logout: LOGOUT,
};
