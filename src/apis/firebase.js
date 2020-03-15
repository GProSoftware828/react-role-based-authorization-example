import axios from 'axios';

const database = axios.create({
  baseURL: 'https://appdb982.firebaseio.com/'
});

export default database;
