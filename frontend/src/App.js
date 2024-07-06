import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TodoListPage from "./TodoList/TodoListPage";
import Calculate from "./Calculate/Calculate";
import DischargeCalculate from "./DischargeCalculate/DischargeCalculate";
import TodayWeather from "./TodayWeather/TodayWeatherPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/TodoList" element={<TodoListPage />} />
            <Route path="/Calculate" element={<Calculate />} />
            <Route path="/DischargeCalculate" element={<DischargeCalculate />} />
        </Routes>
    );
};

export default App;
