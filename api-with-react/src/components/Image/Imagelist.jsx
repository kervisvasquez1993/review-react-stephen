import React from "react";
import { ImageShow } from "./ImageShow";

export const Imagelist = ({ valueInput, data, loading }) => {
    return (
        <>
            Buscar producto : "{valueInput}"
            <ul>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    data?.map((e) => <ImageShow key={e.id} data={e} />)
                )}
            </ul>
        </>
    );
};
