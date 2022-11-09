import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Manage.css'
import { useDispatch } from 'react-redux';
import man1_1 from './img/home_treatment.jpg';
import manage_l from './img/IsolationMain.jpg';
import manage_l2 from './img/HospitalMain.jpg';

import reImg from './img/ManageMain.jpg';
const Manage = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: reImg });
    dispatch({ type: 'PAGE', payload: "확진 후 관리" });
    return (
        <div className='manage'>
            <div className='manage_content'>
                <h2>확진 후 관리</h2>
                <div>


                    <h3>확진시 해야 할 일</h3>
                    <p>확진 전 만났던 친구나 동료에게 연락해 상황이 커지는 것을 막는다.</p>
                    <p>
                        검채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리한다.</p>
                    <p>
                        보건소로부터 코로나19 양성 통보 문자를 받으면, ‘확진자 및 동거인 안내문’ 등(URL)을 확인해야 한다.
                    </p>
                    <a href="https://c11.kr/wpv5" target="_blank">「확진자 및 동거인 안내문」</a>
                    <p>
                        실거주지 관할 보건소에서 확진자 자기기입식 조사서를 문자(URL)로 보내주니, 수신 시 바로 작성해야 한다(유선으로 확진자 조사 실시 가능).</p>
                    <p>

                        확진자 치료의 기본원칙은 재택치료이므로, 보건소의 확진자 조사 이후 재택치료자를 집중관리군 또는 일반관리군으로 분류하여 건강관리 및 치료를 받게 된다.
                    </p>
                    <h3>재택치료</h3>
                    <p>
                        일반관리군
                        동네 병·의원, 호흡기전담클리닉, 호흡기진료지정의료기관, 재택치료 의료상담센터에서 전화 상담·처방 실시
                    </p>
                    <p>

                        1환자가 의료기관에 전화 상담·처방 요청을 하면 의료기관과 상의하여 가능한 시간에 상담
                    </p>
                    <p>

                        대면진료 필요시 사전 예약 후 외래진료센터 이용
                    </p>
                    <p>

                        집중관리군
                        재택치료 관리의료기관이 건강모니터링 실시
                    </p>
                    <p>

                        1일 2회 유선 모니터링
                    </p>
                    <p>

                        대면진료 필요시 사전예약 후 외래진료센터 이용


                    </p>
                    <img src={man1_1} className="home" alt="home" />
                    <h3>생활치료센터 입소치료</h3>
                    <p>
                        무증상·경증인 코로나19 확진자가 거주요인 등에 따라 재택치료가 불가능하면 생활치료센터로 배정된다.
                    </p>
                    <p>
                        입원/입소 요인(위험요인)이 있는 자(동거인 포함)
                    </p>
                    <p>
                        감염에 취약한 주거 환경(고시원, 쉐어하우스, 노숙인 등)에 있는 자
                    </p>
                    <p>
                        소아/장애/70세 이상 등의 경우로서 돌봄이 필요하나 보호자와 공동격리가 불가능한 자
                    </p>
                    <p>
                        이외에 지자체장이 예외적으로 재택치료가 어렵다고 인정하는 자
                    </p>
                    <h3>의료기관 입원치료</h3>
                    <p>
                        확진자의 코로나19 증상에 따른 중증도, 동반된 기저질환 및 신체적 문제의 중증도와 긴급성(예. 응급 분만, 급성 관상동맥질환, 뇌졸중, 중증 외상, 응급 수술, 위장관 출혈 등)을 고려하여 병상 배정된다.

                    </p>
                </div>
            </div>

            <hr />
            <div className='bottom'>
                <h5 className="bottom_heading">Related Posts</h5>
                <br /><br /><br /><br /><br /><br />

                <div className="bottom_content">


                    <div className="bottom_post">
                        <Link to="/isolation">
                            <img className="phoneImage" alt="iPhone_01" src={manage_l} />
                            <a className='phoneImage_a'>격리 후 조치</a>
                        </Link>



                        <Link to="/Hospital">
                            <img className="phoneImage" alt="iPhone_01" src={manage_l2} />
                            <a className='phoneImage_a'>인근 병원 찾기</a>
                        </Link>
                    </div>



                </div>
            </div>






        </div>
    );
};

export default Manage;