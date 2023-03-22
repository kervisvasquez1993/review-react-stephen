import { useState, useEffect, createContext } from "react";
import { ApiBackend } from "../apis/ApiBackend";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("token");
            if (!token) return;
            console.log(token, "auth");
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            };
            // console.log(config, "confog")
            try {
                const  {data} = await ApiBackend("users/perfil", config);
                // console.log(da ta);
                setAuth(data);
            } catch (error) {
                console.log(error)
            }
        })();
    }, []);
    return (
        <AuthContext.Provider value={{ setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
