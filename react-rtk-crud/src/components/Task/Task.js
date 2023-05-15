import React from "react";

const Task = ({ task }) => {
    const { name, description, complete } = task;
    console.log(task)
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>

        </>
    );
};

export default Task;
