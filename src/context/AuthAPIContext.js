import { createContext } from 'react';

const empty = () => {};

const AuthAPIContext = createContext({
    login: empty,
    checkSessions: empty,
    logout: empty
})

export default AuthAPIContext;