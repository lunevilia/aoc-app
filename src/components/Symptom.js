import React from 'react';
import { Link } from 'react-router-dom';
import "./symptom.css";
import { useDispatch } from 'react-redux';
const Symptom = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/SymptomMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나19(COVID-19) 증상" });
    return (
        <div className='symptom'>
            <div className='wrap'>
                <br />

                <h1>코로나19(COVID-19) 증상</h1><br />

                <div className='colorbox'>
                    <h3>코로나 바이러스란?</h3>
                </div>
                <img className='imgbox' src='/img/coronavirus-4932607_1920 (1).jpg' alt='#'></img>
                <img className='imgbox' src='/img/coronavirus-4904507_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/covid-19-4982910_1920.jpg' alt='#'></img>
                <li>
                    코로나 바이러스는 사람과 다양한 동물에 감염될 수 있는 바이러스로서 유전자 크기 &ensp;&ensp;&ensp;
                    27~32kb의 RNA바이러스이다.
                </li><br />
                <div className='colorbox'>
                    <h3>코로나 바이러스 분류</h3>
                </div>
                <li>
                    코로나 바이러스과에는 4개의 속(알파, 베타, 감마, 델타)이 있음
                    <li>알파,베타: 사람과 동물에게 감염</li>
                    <li>감마,델타: 동물에게 감염</li>
                </li><br />
                <div className='colorbox'>
                    <h3>코로나 바이러스의 형태</h3>
                </div>
                <img className='imgbox' src='/img/covid-19-6882296.jpg' alt='#'></img>
                <img className='imgbox' src='/img/covid-19-4961257_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/coronavirus-4972480_1920.jpg' alt='#'></img>
                <li>
                    형태는 코로나 바이러스의 명명과 같이 전자현미경 관찰시 구형
                    <li>외부 스파이크 단백질이 특징적인 크라운형태</li>
                </li><br />
                <div className='colorbox'>
                    <h3>사람감염 코로나 바이러스</h3>
                </div>
                <li>
                    사람감염 코로나 바이러스는 현재까지 6종류가 알려져 있음
                    <li>감기를 일으키는 유형(229E, OC43, NL63, HKU1)</li>
                    <li>중증폐렴을 일으킬 수 있는 유형(SARS-CoV, MERS-CoV)</li>
                </li><br />

                <div className='colorbox'>
                    <h3>코로나19(COVID-19)증상</h3>
                </div>
                <p className='covid'>
                    COVID-19에 감염된 사람은 가벼운 증상에서 중증 질환까지 다양한 범위의 증상이 나타나는 것으로 보고되었습니다.
                    증상은 바이러스에 노출된 후 2-14일 뒤에 나타날 수 있습니다. 누구나가 경증에서 중증의 증상을 보일 수 있습니다.
                    아래와 같은 증상이 나타나면 COVID-19에 걸린 것일 수 있습니다.
                </p>

                <ul>
                    <li>발열 또는 오한</li>
                    <li>기침 또는 가래</li>
                    <li>숨가쁨 또는 호흡곤란</li>
                    <li>피로</li>
                    <li>근육통 또는 몸살</li>
                    <li>두통</li>
                    <li>미각 또는 후각 상실</li>
                    <li>인후염</li>
                    <li>코막힘 또는 콧물</li>
                    <li>메스꺼움 또는 구토 설사</li>
                    <li>객혈과 오심</li>
                </ul>

                <div className='box1'>
                    <p className='css2'>
                        위의 증상 목록들에 코로나19와 관련된 모든 증상이 포함되어 있는 것은 아닙니다. AOC는 COVID-19에 관한 정보가 추가되는 대로 이 목록을 추가할
                        것입니다. 고령자와 심장이나 폐 질환, 당뇨병 등의 중증 기저질환이 있는 사람들은 COVID-19 감염으로 인해서 심각한 합병증을 일으킬
                        위험이 더 높은 것으로 보입니다.
                    </p>
                </div><br />
                <div className='colorbox'>
                    <h3>응급 치료 처치를 받아야 하는 경우</h3>
                </div>
                <div>
                    <p>COVID-19관련 응급 경고 신호에 유의하세요.
                        다음과 같은 증상을 보이는 사람이 있으면 즉시 응급 의료 처치를 받아야 합니다.
                    </p>
                </div>
                <ul>
                    <li>호흡곤란</li>
                    <li>가슴의 지속적인 통증 또는 압박</li>
                    <li>전에 없던 혼란 증상</li>
                    <li>깨어나지 못하거나 의식을 유지하지 못함</li>
                    <li>피부, 입술 또는 손발톱 바닥이 창백해지거나 회색 또는 파란색이 됨(피부 색조에 따라 상이)</li>
                </ul>
                <div className='box2'>
                    <p className='css3'>이 목록들이 모든 증상을 나타내지는 않습니다. 의사와 상담을 권장합니다.</p>
                </div><br />

                <div className='colorbox'>
                    <h3>코로나19의 치명률</h3>
                </div>
                <li>
                    전세계 치명률은 지역, 인구집단연령 구조, 감염 상태 및 기타 요인에 의해 0.1~25%로 다양하다.
                </li>
                <li>
                    전세계 치명률은 0.00%~1.63%(중위값0.27%)로 보정 후 0.00~1.54%(중위값 0.23%)(Bulletin of the World Health Organization. 2021)
                </li>
                <br />
                <div className='colorbox'>
                    <h3>코로나19와 독감의 차이</h3>
                </div>
                <p>인플루엔자(독감)와 COVID-19는 모두 전염성 호흡계 질환이지만 원인 바이러스가 다릅니다. COVID-19는 신종 코로나바이러스
                    (SARS-CoV-2)에 감염되어 발생하고, 독감은 인플루엔자 바이러스에 감염되어 발생합니다.
                </p>
                <p>
                    COVID-19는 독감보다 더 쉽게 전염되며 일부 사람들에게 더 심각한 질병을 유발합니다. 또한 감염 후 증상이 나타나기까지
                    더 오래 걸릴 수 있으며 전염력도 더 오래 지속되는 것 같습니다. 독감과 COVID-19 차이점에 대한 자세한 내용은 아래 다른
                    항목에서 확인할 수 있습니다.
                </p>
                <p>
                    독감과 COVID-19 증상이 일부 비슷하기 때문에 증상만으로 차이를 구분하기 어려우며, 이를 확인하기 위해 검사가 필요할 수
                    있습니다.
                </p>
                <p>
                    COVID-19 및 그 원인 바이러스에 대해 매일 더 많이 알아가는 중이지만, 아직 모르는 부분이 많습니다.
                    이 페이지는 COVID-19와 독감을 비교하여 현재까지 가능한 최상의 정보를 제공합니다.
                </p>

                <div className='box2'>
                    <h4 className='css3'>내용 출처(CDC): https://korean.cdc.gov/coronavirus/2019-nCoV/index.html</h4>
                    <h4 className='css3'>내용 출처(코로나바이러스감염증-19): http://ncov.mohw.go.kr/baroView.do</h4>
                </div><br />
                <br />
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

export default Symptom;