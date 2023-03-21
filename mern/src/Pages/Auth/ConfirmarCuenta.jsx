import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ApiBackend } from "../../apis/ApiBackend";
import axios from "axios";
import { Alert } from "../../Views/Alert";
export const ConfirmarCuenta = () => {
    const params = useParams();
    const { id } = params;
    const [alerta, setAlerta] = useState({});
    useEffect(() => {
        const confirmCuenta = async () => {
            try {
                const url = `http://localhost:3000/api/users/confirmar/${id}`;
                const { data } = await axios(url);
                // console.log(ApiBackend(),"hola")
                // const respuesta = await ApiBackend(
                //     `/users/confirmar/${id}`
                // );

                // console.log(respuesta, "respuesta");
                // const { data } = respuesta;

                console.log(data);
            } catch (error) {
                console.log(error);
                setAlerta({ message: error.response.data.error, error: true });
                console.log(alerta)
            }
        };
        confirmCuenta();
    }, []);
    // console.log(params);
    const { message } = alerta;
    return (
        <>
            <h1 className="text-sky-600 font-black text-center text-3xl capitalize">
                Conforma tu cuenta y comienza a crear tus proyectos
                <span className="text-slate-700"> tus proyectos</span>
            </h1>
            {message && (
                <div>
                    <Alert type={alerta} />
                </div>
            )}
        </>
    );
};
