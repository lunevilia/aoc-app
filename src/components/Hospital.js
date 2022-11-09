import { Link, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import './Hospital.css';
import LandingPage from '../LandingPage';
import { useDispatch } from 'react-redux';

import reImg from './img/HospitalMain.jpg';

const Hospital = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: reImg });
    dispatch({ type: 'PAGE', payload: "인근 병원 및 검진소" });
    return (
        <div className='hospital'>
            <h2 className='hospital_head'>인근 병원 및 검진소</h2>

            <div className='hospital_content'>
                <LandingPage />
            </div>


            <hr />
            <div className='bottom'>
                <h5 className="bottom_heading">Related Posts</h5>
                <br /><br /><br /><br /><br /><br />

                <div className="bottom_content">


                    <div className="bottom_post">
                        <Link to="/manage">
                            <img className="phoneImage" alt="iPhone_01" src="img/ManageMain.jpg" />
                            <a className='phoneImage_a'>코로나 확진 후 관리</a>
                        </Link>



                        <Link to="/isolation">
                            <img className="phoneImage" alt="iPhone_01" src="img/IsolationMain.jpg" />
                            <a className='phoneImage_a'>코로나 격리 시 주의 사항</a>
                        </Link>
                    </div>



                </div>
            </div>




        </div>

    );
};

export default Hospital;