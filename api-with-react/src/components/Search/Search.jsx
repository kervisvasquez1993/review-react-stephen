import React, { useState } from "react";

export const Search = ({ onInputChange, handleSubmit }) => {
    const [queryValue, setQueryValue] = useState("");
    const input = (e) => {
        setQueryValue(e.target.value);
    };
    const onSubmitValue = (e) => {
        e.preventDefault();
        onInputChange(queryValue);
        handleSubmit(queryValue)
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
