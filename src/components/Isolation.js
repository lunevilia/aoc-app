
import { Link, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";
import './Isolation.css';
import { useDispatch } from 'react-redux';
const Isolation = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/IsolationMain.jpg" });
    dispatch({ type: 'PAGE', payload: "격리 후 조치" });
    return (
        <div className='isolation'>
            <h2 className='isolation_head'>격리 후 조치</h2>

            <div className='isolation_Contents'>


                <h5 className='isolation_Contents_Name'>자가격리대상자 생활수칙</h5>

                <ul className='isolation_Contents_Ul'>
                    <li>감염 전파 방지를 위해 격리장소 바깥 외출금지</li>
                    <li>독립된 공간에서 혼자 생활하기
                        <ul className='isolation_Contents_doubleUl'>
                            <li>방문 닫은 채로 창문을 열어 자주 환기시키고, 식사는 혼자서 하기</li>
                            <li>가능한 혼자만 사용할 수 있는 화장실과 세면대가 있는 공간 사용하기</li>
                            <li className='redContents'>*공용 화장실, 세면대를 사용한다면, 사용 후 소독(락스 등 가정용소독제)하고 다른 사람이 사용하도록 합니다.</li>
                        </ul>
                    </li>
                    <li>진료 등 외출이 불가피할 경우 반드시 관할 보건소에 먼저 연락하기</li>
                    <li>가족 또는 함께 거주하는 분과 대화 등 접촉하지 않기
                        <ul className='isolation_Contents_doubleUl'><li>불가피한 경우, 얼굴을 맞대지 않고 서로 마스크를 쓰고 2m이상의 거리를 두기</li></ul>
                    </li>
                    <li>개인용품(개인용 수건, 식기류, 휴대전화 등)으로 사용하기
                        <ul className='isolation_Contents_doubleUl'>
                            <li>의복 및 침구류는 단독세탁</li>
                            <li>식기류 등은 별도로 분리하여 깨끗이 씻기 전에 다른 사람이 사용하지 않도록 하기</li>
                        </ul>
                    </li>
                    <li>건강수칙 지키기
                        <ul className='isolation_Contents_doubleUl'>
                            <li>비누로 30초이상 흐르는 물에 손 씻기, 기침 등 호흡기증상이 있을 경우 마스크 착용, 마스크가 없으면 소매로 가려 기침하며 기침, 재채기 후 손 씻거나 손 소독 실시하기</li>
                        </ul>
                    </li>

                </ul>

                <ul className='isolation_Contents_Ul'>
                    <li>
                        <a className="isolation_Link" href='http://ncov.mohw.go.kr/duBoardList.do?brdId=2&brdGubun=22'>보건 복지부 자가 격리 공지사항</a>
                    </li>
                </ul>



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



                        <Link to="/Hospital">
                            <img className="phoneImage" alt="iPhone_01" src="img/HospitalMain.jpg" />
                            <a className='phoneImage_a'>인근 병원 찾기</a>
                        </Link>
                    </div>



                </div>
            </div>




        </div>
    );
};

export default Isolation;