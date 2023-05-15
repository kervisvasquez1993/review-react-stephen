import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/taskSlice";
const TaskForm = () => {
    const dispatch = useDispatch();
    const [task, setTasks] = useState({
        name: "",
        description: "",
    });
    const handleInputChange = (e) => {
        setTasks({ ...task, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({ ...task, id: uuid() }));
        setTasks({name : "", description : ""});
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="title"
                name="name"
                value={task.name}
                onChange={handleInputChange}
            />
            <textarea
                type="text"
                placeholder="Description"
                name="description"
                value={task.description}
                onChange={handleInputChange}
            ></textarea>
            <input type="submit" value="enviar" />
        </form>
    );
};

export default TaskForm;
