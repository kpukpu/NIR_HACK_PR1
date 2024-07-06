import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./HomePage/HomePage";
import TodoList from "./TodoList/TodoListPage";
import Calculate from "./Calculate/Calculate";
import DischargeCalculate from "./DischargeCalculate/DischargeCalculate";
import DDayCalculator from "./DDayCalculator/DDayCalculatorPage"
import TodayWeather from "./TodayWeather/TodayWeatherPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/Calculate" element={<Calculate />} />
            <Route path="/DischargeCalculate" element={<DischargeCalculate />} />
            <Route path="/DDayCalculatorPage" element={<DDayCalculator />} />
            <Route path="/TodayWeather" element={<TodayWeather />} />
        </Routes>
    );
};

export default App;
