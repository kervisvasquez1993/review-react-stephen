import React, { useEffect, useState } from "react";
import { searchImage } from "../api";

export const useFetchImage = (query) => {
    const [state, setState] = useState({
        isLoading: true,
        data: null,
        erroMessage: null,
    });

    const getImage = async (params) => {
        const respuesta = await searchImage(params);

        setState({
            data: respuesta,
            isLoading: false,
            erroMessage: null,
        });
    };

    useEffect(() => {
        getImage(query);
    }, [query]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        erroMessage: state.erroMessage,
    };
};
