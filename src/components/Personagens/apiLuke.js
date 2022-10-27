import axios from 'axios';

const apiLuke = axios.create({
   baseURL: "https://swapi.dev/api/people/1/"
});

export default apiLuke;