import React from "react";

export const Alert = ({ type }) => {
    return (
        <div
            className={`${
                type.error
                    ? "from-red-400 to-red-600"
                    : "from-sky-400 to-sky-600"
            } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-bold text-sm text-while my-10 "`}
        >
            {type.message}
        </div>
    );
};
