import React from "react";

export const ImageShow = ({ data }) => {
    return (
        <li>
            <img src={data.urls.small} alt="" />
        </li>
    );
};
