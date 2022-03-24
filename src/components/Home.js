import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Home = () => {
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "viewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "" });
    dispatch({ type: 'PAGE', payload: "Home" });
    return (
        <div className='home'>
            <h2></h2>

            <div className='homeRightMenu'><Link to="/">Home</Link></div>
            <div className='homeRightMenu'><Link to="/current">코로나 현황 보기</Link></div>
            <div className='homeRightMenu'><Link to="/prevent">코로나 예방 방법</Link></div>
            <div className='homeRightMenu'><Link to="/guide">코로나 방역지침</Link></div>
            <div className='homeRightMenu'><Link to="/symptom">코로나 증상</Link></div>
            <div className='homeRightMenu'><Link to="/vaccine">코로나 백신</Link></div>
            <div className='homeRightMenu'><Link to="/manage">코로나 확진 후 관리</Link></div>
            <div className='homeRightMenu'><Link to="/isolation">코로나 자가 격리 시 주의 사항</Link></div>
            <div className='homeRightMenu'><Link to="/maskGuide">마스크 의무 행정 지침</Link></div>
            <div className='homeRightMenu'><Link to="/hospital">인근 병원 찾기</Link></div>

        </div>
    );
};

export default Home;