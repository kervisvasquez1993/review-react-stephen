import React from "react";
import { useSelector } from "react-redux";
import TaskList from "./components/Task/TaskList";
import TaskForm from "./components/Task/TaskForm";

const App = () => {
    return (
        <div>
            App
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
