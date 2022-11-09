import React from 'react';
import { useDispatch } from 'react-redux';

import about1_1 from './img/questionMark.jpg';
import reImg from './img/AboutMain.jpg';

const About = () => {
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: reImg });
    dispatch({ type: 'PAGE', payload: "사이트 관련 문의" });
    return (
        <div className='about'>
            <h2>사이트 관련 문의</h2>
            <img src={about1_1} className='question' alt='queition' />
            <p>문의가 있으면 aoc19@gmail.com으로 문의해주세요</p>
            <span>질병관리청 콜센터 1339</span>
        </div>
    );
};

export default About;