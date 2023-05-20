import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Task from "./Task";
const TaskList = () => {
    useEffect(() =>{},[

    ]);
    const taskListState = useSelector((state) => state.tasks);
    return (
        <div>
            <header>
                <h1>Task {taskListState.length}</h1>
                <Link to={"/create-task"}>Create task </Link>
            </header>
            {taskListState.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
