import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Nav = () => {
    const StyledElement = styled.div`
        background-color: #ffffff;
        height: 4.3em;
        position: relative;


        & .NIR-HACK {
            color: #000000;
            font-weight: 400;
            left: 20px;
            letter-spacing: 1px;
            line-height: normal;
            position: absolute;
            white-space: nowrap;
        }

        & .text-wrapper {
            font-size: 2em;
            font-weight: 700;
            letter-spacing: 1px;
        }

        & .span {
            font-size: 1.5em;
            letter-spacing: 1px;
        }

        & .frame {
            align-items: flex-start;
            display: inline-flex;
            gap: 21px;
            left: 381px;
            position: absolute;
            top: 0;
        }

        & .linkTo {
            color: #000000;
            font-size: 1.3em;
            font-weight: 400;
            height: 70px;
            letter-spacing: 1px;
            line-height: normal;
            margin-top: 1em;
            position: relative;
            text-align: center;
            width: 216px;
            text-decoration: none;
        }
    `;


    return (
        <StyledElement>
            <p className="NIR-HACK">
                <span className="text-wrapper">NIR </span>
                <span className="span">HACK</span>
            </p>

            <div className="frame">
                <Link className="linkTo" to={'/TodoList'}> To-do 리스트 </Link>
                <Link className="linkTo" to={'/Calculate'}> 계산기 </Link>
                <Link className="linkTo" to={'/DischargeCalculate'}> 전역일 계산기 </Link>
                <Link className="linkTo" to={'/DDayCalculatorPage'}> 디데이 계산기 </Link>
                <Link className="linkTo" to={'/TodayWeather'}> 오늘의 날씨 </Link>
            </div>
        </StyledElement>
    );


};

export default Nav;