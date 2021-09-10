import axios from 'axios';

const appApi = {
    getClientsData() {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.data);
    },
};

export default appApi;