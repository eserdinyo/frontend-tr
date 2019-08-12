import axios from 'axios';

const http = axios.create({
    baseURL: 'https://api-frontend-tr.herokuapp.com/'
});

export const fetchCompanies = () => {
    return http.get().then(res => res.data);
}