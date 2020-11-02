const axios = require('axios');
const URL = 'http://testapi.marit.expert:3003';

const useAPI = () => {
    const login = (userData) => {
        const data = axios.post(URL + '/auth', userData)
            .then(response => response);
        return data;
    }
    const sessionCheck = () => {
        const data = axios.get(URL + '/check')
            .then(response => response.data);
        return data;
    }
    const logout = () => {
        const data = axios.get(URL + '/logout')
            .then(response => response);
        return data;
    }
    return { login, sessionCheck, logout }
}

export default useAPI;