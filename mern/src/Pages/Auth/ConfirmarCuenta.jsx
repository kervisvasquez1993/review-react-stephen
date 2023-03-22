import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ApiBackend } from "../../apis/ApiBackend";
import axios from "axios";
import { Alert } from "../../Views/Alert";
export const ConfirmarCuenta = () => {
    const params = useParams();
    const { id } = params;
    const [alerta, setAlerta] = useState({});
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    useEffect(() => {
        const confirmCuenta = async () => {
            try {
                const respuesta = await ApiBackend(`/users/confirmar/${id}`);
                const { data } = respuesta;

                console.log(data);
                setAlerta({ message: data.msj });
                setCuentaConfirmada(true)
            } catch (error) {
                console.log(error);
                setAlerta({ message: error.response.data.error, error: true });
                console.log(alerta);
            }
        };
        confirmCuenta();
    }, []);
    const { message } = alerta;
    setTimeout(() => {
        setAlerta({ message: "", error: false });
    }, 5000);
    return (
        <>
            <h1 className="text-sky-600 font-black text-center text-3xl capitalize">
                Conforma tu cuenta y comienza a crear tus proyectos
                <span className="text-slate-700"> tus proyectos</span>
            </h1>
            {message && <Alert type={alerta} />}
            {cuentaConfirmada && (
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
