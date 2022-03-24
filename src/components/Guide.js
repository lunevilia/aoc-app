import React from 'react';
import { Link } from 'react-router-dom';
import './Vaccine/Vaccine.css';
import { useDispatch } from 'react-redux';
const Guide = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/GuideMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나 방역지침" });
    return (
        <div className='guide'>
            <h2>코로나 방역지침</h2>
            <div className='container'>
                
                <div className='colorbox'>
                    <h3>사회적 거리두기(3.21~4.3)</h3>
                </div>
                
                <div className='guide_content'>

                    <p>사적 모임 <span>6인 → 8인</span>으로 조정</p>
                    <p>다중 이용시설 운영시간 <span>23시까지</span></p>
                    <p>*영화관·공연장의 경우, 상영·공연 시작 시간 23시까지 허용(종료시각 익일 01시 초과 금지)</p>
                    <p><span>행사·집회</span>의 경우 접종여부 관계없이 <span>최대 299명까지</span> 가능</p>
                    <p>*(행사 예외) 공무 및 기업 필수경영 활동 관련 행사(기업 정기주주총회 등)(별도수칙) 전시회·박람회, 국제회의·학술행사 등</p>
                    <p>종교시설의 경우 정규 종교활동은 접종여부 관계없이 수용인원의 70% 범위 내에서 실시</p>
                    <p>무증상 경증 확진자의 동반 질환치료를 위한 일반병동 활용 검토</p>
                    <p>재택치료자의 경우 보건소 별도 연락없이 확진판정 직후부터 동네 병·의원에서 의료상담 약 처방가능</p>

                </div>
                <br />

                <div className='colorbox'>
                    <h3>방역패스 잠정 중단(3.1~)</h3>
                </div>

                <div className='guide_content'>
                    <p>3월 1일부터 <span>방역패스 잠정 중단</span></p>
                    <p>보건소 코로나19 음성확인서 발급 중단</p>
                    <p>4월 1일 시행 예정인 청소년 방역패스도 중단</p>
                </div>
                <br />

                <div className='colorbox'>
                    <h3>코로나 격리 기준</h3>
                </div>

                <div className='guide_content'>

                    <p>동네 병·의원 <span>전문가용 신속항원검사 양성 시</span> 바로 <span>진료·상담·처방</span>실시</p>
                    <p>국내 또는 해외 접종 완료 입국자, coov등록시 격리 면제</p>

                </div>
                <br />

                <div className='colorbox'>
                    <h3>확진자의 동거인 격리체계(3.1~)</h3>
                </div>

                <div className='guide_content'>
                    <p><span>확진자 동거인</span> 예방접종 여부 관계없이 모두 <span>격리의무 면제</span>(3.1~)</p>
                    <p>3일 이내 PCR 검사(1회)와 7일차에 신속항원검사 권장</p>
                    <p>확진자 입원·격리 통지 발급→<span>'문자·SNS 통지'</span>로 변경</p>
                </div>
                <br />

                <div className='colorbox'>
                    <h3>60세 이상·면역저하지 확진 시(3.25~)</h3>
                </div>

                <div className='guide_content'>
                    <p>동네 병의원에서 신속항원검사를 통해 확진되는 경우 60세 이상·면역저하자 일반관리군으로 관리</p>
                    <p>단, 본인 희망 시 집중관리군으로 전환 가능</p>
                    
                    <br />

                    <div className='source_area'>
                        자료 출처 <br /><br />
                        <a href='http://ncov.mohw.go.kr/tcmBoardList.do?brdId=3&brdGubun=' target="_blank">코로나바이러스감염증19 보도자료</a>
                    </div>
                </div>
                
                <br /><br /><br />

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



                            <Link to="/maskGuide">
                                <img className="phoneImage" alt="iPhone_01" src="img/MaskMain.jpg" />
                                <a className='phoneImage_a'>마스크 의무 행정 지침</a>
                            </Link>
                        </div>



                    </div>
                </div>
            </div>



            



        </div>
    );
};

export default Guide;