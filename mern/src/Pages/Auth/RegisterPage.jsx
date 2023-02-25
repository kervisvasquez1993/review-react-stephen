import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ApiBackend } from "../../apis/ApiBackend";
import { Alert } from "../../Views/Alert";

export const RegisterPage = () => {
    const [form, setForm] = useState({
        email: "",
        nombre: "",
        passwords: "",
        repeatPasswords: "",
    });
    const [alerta, setAlerta] = useState({
        message: "",
        error: false,
    });
    const { message, error } = alerta;
    const { email, passwords, repeatPasswords, nombre } = form;
    const sendForm = async (e) => {
        e.preventDefault();
        if ([nombre, email, passwords, repeatPasswords].includes("")) {
            setAlerta({
                message: "Todos los campos son obligatorios",
                error: true,
            });
            return;
        }

        if (passwords !== repeatPasswords) {
            setAlerta({
                message: "Los Passwords no son iguales",
                error: true,
            });
            return;
        }

        if (passwords.length <= 6) {
            setAlerta({
                message: "Minimo son 6 caracteres",
                error: true,
            });
            return;
        }

        setForm({ email: "", passwords: "", repeatPasswords: "", nombre: "" });
        try {
            const respuesta = await ApiBackend.post("/users", form);
            console.log(respuesta);
            const { data } = respuesta;

            setAlerta({
                error: false,
                message: data.msj,
            });
        } catch (error) {
            const { response } = error;
            setAlerta({
                error: true,
                message: response.data.msj,
            });
        }
        setTimeout(() => {
            setAlerta({ message: "", error: false });
        }, 3000);
    };
    return (
        <>
            <h1 className="text-sky-600 font-black text-3xl capitalize">
                Registro de
                <span className="text-slate-700"> Usuario</span>
            </h1>
            {alerta.message.length > 0 && <Alert type={alerta} />}

            <form
                className="my-10 bg-white rounded-lg px-10 py-5"
                onSubmit={(e) => sendForm(e)}
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="nombre"
                    >
                        Nombre :{" "}
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={(e) =>
                            setForm({ ...form, nombre: e.target.value })
                        }
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
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
                        placeholder="Email de registro aqui"
                        value={email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="passwords"
                    >
                        Passwords :{" "}
                    </label>
                    <input
                        id="passwords"
                        type="password"
                        placeholder="Passwords"
                        value={passwords}
                        onChange={(e) =>
                            setForm({ ...form, passwords: e.target.value })
                        }
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="passwords2"
                    >
                        Confirm Passwords :{" "}
                    </label>
                    <input
                        id="passwords2"
                        type="password"
                        placeholder="Conform Passwords"
                        value={repeatPasswords}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                repeatPasswords: e.target.value,
                            })
                        }
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
                    to={"/"}
                >
                    ingresar
                </Link>
                <Link
                    className=" block text-center my-5 text-slate-500 uppercase text-sm  "
                    to={"/olvidar-passwords"}
                >
                    olvide mi Passwords
                </Link>
            </nav>
        </>
    );
};
