import React, { useEffect, useState } from "react";
import { searchImage } from "./api";
import { Imagelist } from "./components/Image/Imagelist";
import { Search } from "./components/Search/Search";

const App = () => {
    // const fetchImge = searchImage();
    // fetchImge;
    const [valueInput, setValueInput] = useState("");
    const onInputChange = (valor) => {
        setValueInput(valor);
    };
    return (
        <>
            <Search onInputChange={onInputChange} />
            <Imagelist valueInput={valueInput} />
        </>
    );
};

export default App;
