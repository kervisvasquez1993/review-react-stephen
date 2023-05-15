import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
const TaskList = () => {
    useEffect(() =>{},[

    ]);
    const taskListState = useSelector((state) => state.tasks);
    return (
        <div>
            {taskListState.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
