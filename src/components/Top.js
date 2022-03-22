import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ApiCall from './ApiCall';

const Top = () => {
    let [menuViewState, setMenuViewState] = useState("MenuHidden");
    const location = useLocation()
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const menuHiddenChange = () => {
        if (menuViewState === "MenuHidden") {
            setMenuViewState("MenuView");
        } else {
            setMenuViewState("MenuHidden");
        }
    }


    const TopLoadPage = () => {
        console.log(`${location.pathname}`);
    }
    return (
        <div className='leftFlexDiv' onLoad={TopLoadPage}>

            <div>
                <h3><Link to="/" className='menuHome'>AOC</Link></h3>
                <button className='menuBtn' onClick={menuHiddenChange}>Menu</button>
                <Link className='aboutBtn' to="/about">?</Link>
                <button >현재 URL 확인</button>
                <p>클릭수 : {count}</p>
                <button onClick={
                    () => { dispatch({ type: "ADD" }) }
                }>+</button>
                <button onClick={
                    () => { dispatch({ type: "SUB" }) }
                }>-</button>

                <ApiCall />

            </div>
            <div className={menuViewState}>
                <ul className='menuNavbar'>
                    <li><Link to="/">홈화면으로 이동</Link></li>
                    <li><Link to="/current">코로나 현황 보기</Link></li>
                    <li><Link to="/prevent">코로나 예방 방법</Link></li>
                    <li><Link to="/guide">코로나 코로나 방역지침</Link></li>
                    <li><Link to="/symptom">코로나 증상</Link></li>
                    <li><Link to="/vaccine">코로나 백신</Link></li>
                    <li><Link to="/manage">코로나 확진 후 관리</Link></li>
                    <li><Link to="/isolation">코로나 자가 격리 시 주의 사항</Link></li>
                    <li><Link to="/maskGuide">마스크 의무 행정 지침</Link></li>
                    <li><Link to="/hospital">인근 병원 찾기</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Top;