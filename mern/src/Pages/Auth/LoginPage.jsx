import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiBackend } from "../../apis/ApiBackend";
import { Alert } from "../../Views/Alert";
import useAuth from "../../hooks/useAuth";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerta, setAlerta] = useState("");
    const { setAuth, loading, auth } = useAuth();

    const handleSutmit = async (e) => {
        e.preventDefault();
        if ([email, password].includes("")) {
            setAlerta({
                message: "Todos los campos son obligatorios",
                error: true,
            });
            return;
        }
        try {
            const { data } = await ApiBackend.post("users/login", {
                email,
                passwords: password,
            });
            localStorage.setItem("token", data.token);
            setAuth(data);
            console.log(data);
            setAlerta({});
        } catch (error) {
            console.log(error.response.data.error);
            setAlerta({ message: error.response.data.error, error: true });
        }
    };
    const { message } = alerta;
    console.log(auth, "auth");
    console.log(loading, "loading");
    return (
        <>
            <h1 className="text-sky-600 font-black text-3xl capitalize">
                Inicia Sesion y administra
                <span className="text-slate-700"> tus proyectos</span>
            </h1>
            {message && <Alert type={alerta} />}
            <form
                onSubmit={(e) => handleSutmit(e)}
                className="my-10 bg-white rounded-lg px-10 py-5"
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="email"
                    >
                        Email :{" "}
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="Email de registro aqui"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
                <input
                    type="submit"
                    value={"iniciar Sesion"}
                    className="bg-sky-700 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hove:bg-sky-800 transition-colors "
                />
            </form>
            <nav className="lg:flex lg:justify-between ">
                <Link
                    className=" block text-center my-5 text-slate-500 uppercase text-sm  "
                    to={"registrar"}
                >
                    No tienes una cuenta? Registrate
                </Link>
                <Link
                    className=" block text-center my-5 text-slate-500 uppercase text-sm  "
                    to={"olvidar-password"}
                >
                    olvide mi Password
                </Link>
            </nav>
        </>
    );
};
