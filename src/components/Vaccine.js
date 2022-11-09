import React from 'react';
import './Vaccine/Vaccine.css';
import { Link, Routes, Route } from 'react-router-dom';
import VaccineInfo from './Vaccine/VaccineInfo';
import ChildVaccine from './Vaccine/ChildVaccine';
import { useDispatch } from 'react-redux';

import vaccine_l from './img/PreventMain.jpg';
import vaccine_l2 from './img/HospitalMain.jpg';

import reImg from './img/VaccineMain.jpg';
function Vaccine() {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: reImg });
    dispatch({ type: 'PAGE', payload: "코로나 백신" });
    return (
        <div className='vaccine'>
            <h2>코로나 백신</h2>
            <div className='container'>


                <div>
                    <Routes>
                        <Route path='/' element={<VaccineInfo />} />
                        <Route path='/vaccineInfo/:keyword' element={<VaccineInfo />} />
                        <Route path='/ChildVaccine' element={<ChildVaccine />} />
                    </Routes>
                </div>

                <hr />
                <div className='bottom'>
                    <h5 className="bottom_heading">Related Posts</h5>
                    <br /><br /><br /><br /><br /><br />

                    <div className="bottom_content">


                        <div className="bottom_post">
                            <Link to="/Prevent">
                                <img className="phoneImage" alt="iPhone_01" src={vaccine_l} />
                                <a className='phoneImage_a'>코로나 예방 방법</a>
                            </Link>



                            <Link to="/Hospital">
                                <img className="phoneImage" alt="iPhone_01" src={vaccine_l2} />
                                <a className='phoneImage_a'>인근 병원 찾기</a>
                            </Link>
                        </div>



                    </div>
                </div>

            </div>








        </div>
    );
};

export default Vaccine;