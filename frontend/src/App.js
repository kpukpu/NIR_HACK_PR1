import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TodoListPage from "./TodoList/TodoListPage";
import Calculate from "./Calculate/Calculate";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodoList" element={<TodoListPage />} />
            <Route path="/Calculate" element={<Calculate />} />
        </Routes>
    );
};

export default App;
