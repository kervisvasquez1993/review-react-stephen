import { useState, useEffect, createContext } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");
            if (!token) return setLoading(false);
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            // console.log(config, "confog")
            try {
                const { data } = await ApiBackend("users/perfil", config);
                // console.log(da ta);
                setAuth(data.msj);
            } catch (error) {
                setAuth({})
                console.log(error);
            }
            setLoading(false);
        })();
    }, []);
    return (
        <AuthContext.Provider value={{ auth, setAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
