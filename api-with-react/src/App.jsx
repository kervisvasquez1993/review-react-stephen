import React, { useEffect, useState } from "react";
import { searchImage } from "./api";
import { Imagelist } from "./components/Image/Imagelist";
import { Search } from "./components/Search/Search";
import { useFetchImage } from "./hooks/useFetchImage";

const App = () => {
    const [valueInput, setValueInput] = useState("");
    const [images, setImage] = useState([]);
    const { data, isLoading } = useFetchImage(valueInput);
    const onInputChange = (valor) => {
        setValueInput(valor);
    };
    const handleSubmit = async (valor) => {
        const resultado = await searchImage(valor);
        setImage(resultado);
    };
    console.log(images, "imagenes");
    return (
        <>
            <Search onInputChange={onInputChange} handleSubmit={handleSubmit} />
            <Imagelist
                valueInput={valueInput}
                data={data}
                loading={isLoading}
            />
        </>
    );
};

export default App;
