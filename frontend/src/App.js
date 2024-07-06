import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TodoListPage from "./TodoList/TodoListPage";
import Calculate from "./Calculate/Calculate";
import DischargeCalculate from "./DischargeCalculate/DischargeCalculate";
import DDayCalculator from "./DDayCalculator"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodoList" element={<TodoListPage />} />
            <Route path="/Calculate" element={<Calculate />} />
            <Route path="/DischargeCalculate" element={<DischargeCalculate />} />
            <Route path="/DDayCalculator" element={<DDayCalculator />} />
        </Routes>
    );
};

export default App;
