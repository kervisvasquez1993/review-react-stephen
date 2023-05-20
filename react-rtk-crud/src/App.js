import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TaskList from "./components/Task/TaskList";
import TaskForm from "./components/Task/TaskForm";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/create-task" element={<TaskForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
