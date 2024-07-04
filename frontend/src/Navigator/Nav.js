import { Link } from "react-router-dom";
import React from "react";
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className="navbar">
                <Link className="navbarMenu" to={'/'}> 홈 화면 </Link>
                <Link className="navbarMenu" to={'/TodoList'}> To-do 리스트 </Link>
                <Link className="navbarMenu" to={'/Calculate'}> 계산기 </Link>

            </div>
        </div>
    );
};

export default Nav;