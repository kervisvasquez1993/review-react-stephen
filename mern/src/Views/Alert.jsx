import React from "react";

export const Alert = ({ type }) => {
    return (
        <div
            className={`${
                type.error
                    ? "from-red-400 to-red-600"
                    : "from-sky-400 to-sky-600"
            } bg-gradient-to-br text-center text-white p-3 rounded-xl uppercase text-bold text-sm  my-10 "`}
        >
            {type.message}
        </div>
    );
};
