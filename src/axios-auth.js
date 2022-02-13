import axios from 'axios';

const instance = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/vue-http-702b0/databases/(default)/documents",
});

export default instance;
