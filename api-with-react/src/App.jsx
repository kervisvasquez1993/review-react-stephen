import React, { useEffect, useState } from "react";
import { Imagelist } from "./components/Image/Imagelist";
import { Search } from "./components/Search/Search";
import { useFetchImage } from "./hooks/useFetchImage";

const App = () => {
    const [valueInput, setValueInput] = useState("");
    const { data, isLoading } = useFetchImage(valueInput);
    const onInputChange = (valor) => {
        setValueInput(valor);
    };
    // console.log(data)
    return (
        <>
            <Search onInputChange={onInputChange} />
            <Imagelist
                valueInput={valueInput}
                data={data}
                loading={isLoading}
            />
        </>
    );
};

export default App;
