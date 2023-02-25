import React from "react";
import { Link } from "react-router-dom";
export const NuevaPassword = () => {
    return (
        <>
            <h1 className="text-sky-600 font-black text-3xl capitalize">
                Reespablece tu password
                <span className="text-slate-700"> tus proyectos</span>
            </h1>
            <form className="my-10 bg-white rounded-lg px-10 py-5">
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    >
                        Password :{" "}
                    </label>
                    <input
                        id="password"
                        type="new password"
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
