import React from "react";
import { ImageShow } from "./ImageShow";

export const Imagelist = ({ valueInput, data, loading }) => {
    console.log(data, "me ejecute");
    return (
        <>
            Buscar producto : "{valueInput}"
            <ul>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    data?.map((e) => (
                        <li>{<ImageShow key={e.id} data={e} />}</li>
                    ))
                )}
            </ul>
        </>
    );
};
