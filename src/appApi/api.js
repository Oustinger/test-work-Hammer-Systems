import axios from 'axios';

const appApi = {
    getClientsData() {
        return axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.data);
    },
    uploadNewClientData(data) {
        // return axios.put(`https://jsonplaceholder.typicode.com/users`, data)
        //     .then((response) => response.data);
        return new Promise((resolve, reject) => resolve({ status: 0 }));
    },
};

export default appApi;