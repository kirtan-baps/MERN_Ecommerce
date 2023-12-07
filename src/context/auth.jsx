import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();
// lol@gmail.com
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    })

    // default axios
    /* `axios.defaults.headers.common['Authorization'] = auth?.token;` is setting the default
    authorization header for all Axios requests. */
    axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // }, [auth])

    return (
        < AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </ AuthContext.Provider >
    )
}

const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth } 