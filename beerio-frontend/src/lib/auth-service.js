import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      // baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  signup(user) {
    const { username, password } = user;
    return this.auth.post('/api/auth/signup', {username, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/api/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/api/auth/logout', {})
      .then(response => response.data)
  }

  me() {
    return this.auth.get('/api/auth/me')
    .then(response => response.data)
  }
}

const auth = new Auth();

export default auth;