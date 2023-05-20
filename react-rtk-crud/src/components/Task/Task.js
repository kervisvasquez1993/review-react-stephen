import React from "react";
import {useDispatch} from "react-redux";
import { deleteTask } from "../../features/tasks/taskSlice";

const Task = ({ task }) => {
    const { name, description, complete } = task;
    const dispatch = useDispatch(deleteTask);
    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };
    return (
        <>
            <h2>{name}</h2>
            <p>{description}</p>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

export default Task;
