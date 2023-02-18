import React, { useState } from "react";

export const Search = ({ onInputChange }) => {
    const [queryValue, setQueryValue] = useState("");
    const input = (e) => {
        setQueryValue(e.target.value);
    };
    const onSubmitValue = (e) => {
        e.preventDefault();
        onInputChange(queryValue);
        setQueryValue("");
    };
    return (
        <>
            <form onSubmit={onSubmitValue}>
                <input
                    type="text"
                    name="queryValue"
                    value={queryValue}
                    onChange={input}
                />
                <button type="submit">Buscar</button>
            </form>
        </>
    );
};
