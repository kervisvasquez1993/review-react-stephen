import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiBackend } from "../../apis/ApiBackend";
import { Alert } from "../../Views/Alert";

export const NuevaPassword = () => {
    // console.log(useParams());
    const [validateToken, setValidateToken] = useState(false);
    const [alerta, setAlerta] = useState({});
    const [password, setPassword] = useState("");
    const [changePassword, setChangePassword] = useState(false);
    const { token } = useParams();
    const { message } = alerta;
    useEffect(() => {
        const comprobarToken = async () => {
            try {
                const response = await ApiBackend(
                    `users/olvidar-password/${token}`
                );
                console.log(response.data);
                setValidateToken(true);
            } catch (error) {
                // console.log(error.response)
                setAlerta({ message: error.response.data.msj, error: true });
            }
        };
        comprobarToken();
    }, []);
    // console.log(validateToken);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length <= 0) {
            setAlerta({ message: "ese campo es requerido", error: true });
            return;
        }

        // console.log(password);
        try {
            const response = await ApiBackend.post(
                `users/olvidar-password/${token}`,
                { passwords: password }
            );
            // const respobse

            setAlerta({ message: response.data.msj });
            setChangePassword(true);
        } catch (error) {
            // console.log(error.response.data.error.errors.passwords.message);
            setAlerta({
                message: error.response.data.error.errors.passwords.message,
                error: true,
            });
        }
    };
    // console.log(password);
    return (
        <>
            <h1 className="text-sky-600 font-black text-3xl capitalize">
                Reespablece tu password
                <span className="text-slate-700"> tus proyectos</span>
            </h1>
            {validateToken && (
                <>
                    <form
                        onSubmit={handleSubmit}
                        className="my-10 bg-white rounded-lg px-10 py-5"
                    >
                        <div className="my-5">
                            <label
                                className="uppercase text-gray-600 block text-xl font-bold"
                                htmlFor="password"
                            >
                                Password :{" "}
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Nuevo Password"
                                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                            />
                        </div>
                        <input
                            type="submit"
                            value={"iniciar Sesion"}
                            className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hove:bg-sky-800 transition-colors "
                        />
                    </form>
                   
                </>
            )}

            {message && <Alert type={alerta} />}
            {changePassword && (
                <Link
                    className=" block text-center my-5 text-slate-500 uppercase text-sm  "
                    to={"/"}
                >
                    ingresar
                </Link>
            )}
        </>
    );
};
