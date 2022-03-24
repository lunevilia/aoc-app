import React from 'react';
import { Link } from 'react-router-dom';
import "./prevent.css";
import { useDispatch } from 'react-redux';
const Prevent = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/PreventMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나 예방방법" });
    return (
        <div className='prevent'>
            <div className='wrap'><br />
                <h1>코로나 예방방법</h1>
                <h2>함께 지키는 예방행동수칙</h2><br />

                <div className='colorbox'>
                    <h3>-COVID-19백신 맞기</h3>
                </div>
                <img className='imgbox' src='/img/vaccine-5926664_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/syringe-5882593_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/medical-5835701_1920.jpg' alt='#'></img>
                <ul>
                    <li>COVID-19백신은 감염 예방에 효과적입니다. COVID-19백신은 중증질환, 입원, 사망 예방에 매우 효과적입니다.</li>
                    <li>COVID-19 유발 바이러스인 SARS-CoV-2의 확산을 늦추는 가장 좋은 방법은 백신 접종입니다.</li>
                    <li>CDC는 면역 저하자를 비롯한 모든 사람에게 권장된 모든 COVID-19백신을 맞을 것을 권고합니다.</li>
                </ul>
                <div className='colorbox'>
                    <h3>-마스크 착용하기</h3>
                </div>
                <img className='imgbox' src='/img/mask.png' alt='#'></img>
                <img className='imgbox' src='/img/mask2.jpg' alt='#'></img>
                <img className='imgbox' src='/img/mask3.jpg' alt='#'></img>
                <ul>
                    <li>
                        마스크는 중요한 공중보건 도구이며 어떤 마스크든 착용하는 것이 마스크가 없는 것보다는 낫다는 점을 명심하세요.
                    </li>
                    <li>자신에게 잘 맞고 지속적으로 착용할 수 있는 것 가운데 가장 보호성이 좋은 마스크를 착용하세요.</li>
                    <li>
                        2세 이상인 사람은 모두 백신 접종 상태에 관계없이 COVID-19 지역사회 감염 레벨이 '높음'인 지역의 공공장소
                        실내에서 잘 맞는 마스크를 올바르게 착용해야 합니다.
                    </li>
                    <li>본인에게 가장 잘 맞고 보호 기능과 편안함을 제공하는 마스크를 착용하세요.</li>
                    <li>COVID-19 지역사회 감염 레벨이 '높음'인 지역에서는 2세 이상의 모두가 공공장소 실내에서 마스크를 착용해야 합니다.</li>
                    <li>아픈데 다른 사람과 함께 있어야 하거나 COVID-19 감염자를 돌봐야 한다면 마스크를 착용하세요.</li>
                    <li>자신이 중증질환 고위험군이거나, 고위험군과 함께 살거나 함께 시간을 보내는 사람은 COVID-19 지역사회 감염 레벨이
                        '보통'일 때의 마스크 착용에 대해 의료기관과 상담하세요.
                    </li>
                    <li>
                        면역체계를 약화하는 질병이 있거나 그러한 약물을 복용하는 사람은 COVID-19 백신 최신 권장을 완료했더라도 보호력이
                        충분하지 못할 수 있습니다. 그러한 사람은 추가 예방 조치에 대해 의료기관과 상담해야 합니다.
                    </li>
                </ul>
                <div className='colorbox'>
                    <h3>-다른 사람과 6피트 거리두기</h3>
                </div>
                <img className='imgbox' src='/img/covid-6020235_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/social-distancing-4992164_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/social-4954208_1920.jpg' alt='#'></img>
                <ul>
                    <li>
                        집 안에서: 가능하면 감염자와 밀접 접촉을 피하세요. 가능하면 감염자와 다른 가족 구성원 간 6피트의 거리를 유지하세요.
                        감염자를 돌보고 있다면, 잘 맞는 마스크를 올바르게 착용하고 귀하를 보호할 수 있는 기타 조치를 취하세요.
                    </li>
                    <li>
                        실내 공공장소에서: 권장된 모든 COVID-19 백신을 맞지 않았다면 다른 사람과 6피트 이상 거리를 유지하세요.
                        COVID-19 중증 질환 고위험군인 경우 특히 그렇게 해야 합니다.
                    </li>
                </ul>

                <div className='colorbox'>
                    <h3>환기가 잘 되지 않는 장소와 군중 피하기</h3>
                </div>
                <img className='imgbox' src='/img/audience-1866738_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/audience-1853662_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/concert-1129966_1920.jpg' alt='#'></img>
                <ul>
                    <li>실내에 들어가면 되도록 창문과 문을 열어 신선한 공기를 유입하세요.</li>
                    <li>COVID-19 중증 질환 고위험군에 속하는 사람은 사람이 많이 붐비는 장소와 실외로부터 신선한 공기가 유입되지 않는 실내 장소를 피하세요.</li>
                </ul>

                <div className='colorbox'>
                    <h3>바이러스 전파 방지를 위한 검사</h3>
                </div>
                <img className='imgbox' src='/img/coronavirus-5739918_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/rapid-antigen-test-6961674_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/rapid-antigen-test-6480437_1920.jpg' alt='#'></img>
                <ul>
                    <li>
                        다양한 검사 유형 중에서 선택할 수 있습니다.
                    </li>
                    <li>
                        SARS-CoV-2(COVID-19를 유발하는 바이러스) 검사는 검사 시점의 감염 여부를 알려줍니다.
                        이 유형의 검사는 바이러스 감염 여부를 확인하기 때문에 바이러스 검사라고 부릅니다.
                    </li>
                    <li>
                        선택한 검사 유형과 관계없이 검사 결과가 양성이 나오면 감염되었음을 의미하므로
                        다른 사람에게 질병을 전파하지 않도록 격리에 들어가고 밀접 접촉자에게 통지해야 합니다.
                    </li>
                    <li>
                        처방전 없이 살 수 있는 자가 검사 키트는 자택 등 어디에서나 간단하게 이용할 수 있고
                        빠른 결과를 얻을 수 있는 바이러스 검사 키트입니다. 자가 검사 키트는 백신 접종 상태나 증상 유무와 관계없이 누구나 이용할 수 있습니다.
                    </li>
                    <li>
                        COVID-19 자가 검사는 백신 접종, 마스크 착용, 물리적 거리두기처럼 COVID-19 전파 가능성을 낮추어
                        자신과 다른 사람을 보호할 수 있는 여러 위험 완화 조치 중 하나입니다.
                    </li>
                </ul>

                <div className='colorbox'>
                    <h3>손을 자주 씻어주세요</h3>
                </div>
                <img className='imgbox' src='/img/hand-washing-4818792_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/soap-dispenser-2337697_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/hands-2238235_1920.jpg' alt='#'></img>
                <ul>
                    <li>
                        물과 비누로 20초 이상 손씻기를 자주 하고 특히 공공 장소를 방문했거나 코를 풀고, 기침과 재채기를 한 후에는 꼭 씻어야 합니다.
                    </li>
                    <li>
                        손 씻기가 특히 더 중요한 때:
                        <ul>
                            <li>음식을 먹거나 준비하기 전</li>
                            <li>얼굴을 만지기 전</li>
                            <li>화장실을 사용한 후</li>
                            <li>공공 장소를 떠난 후</li>
                            <li>코를 풀거나 기침, 재채기를 한 후</li>
                            <li>마스크를 만진 후</li>
                            <li>기저귀 교환 후</li>
                            <li>아픈 사람을 돌본 후</li>
                            <li>동물 또는 반려동물을 만진 후</li>
                        </ul>
                    </li>
                    <li>
                        비누와 물이 없는 경우 알코올을 60% 이상 함유한 손 소독제를 사용합니다. 손 전체에 발라 마른 느낌이 들 때까지 손을 문지릅니다.
                    </li>
                    <li>씻지 않은 손으로 눈, 코, 입을 ​​​​​​​만지지 마세요.</li>
                </ul>

                <div className='colorbox'>
                    <h3>기침과 재채기는 가리고 하세요</h3>
                </div>

                <ul>
                    <li>마스크 착용 시: 마스크를 착용한 상태로 기침이나 재채기를 하시면 됩니다. 되도록 빨리 깨끗한 새 마스크로 갈아 쓰시고 손을 씻으세요.</li>
                    <li>마스크 미착용 시:
                        <ul>
                            <li>기침 또는 재채기를 할 때는 항상 입과 코를 티슈로 가리거나 팔꿈치 안쪽에 대고 하시고, 침을 뱉지 마세요.</li>
                            <li>사용한 티슈는 쓰레기통에 버립니다.</li>
                            <li>즉시 비누와 물로 20초 이상 손을 씻으세요. 비누와 물을 쓰기 여의치 않으면 알코올 함량이 60% 이상인 손소독제로 손을 닦습니다.</li>
                        </ul>
                    </li>
                </ul>

                <div className='colorbox'>
                    <h3>청소 및 소독</h3>
                </div>
                <img className='imgbox' src='/img/hand-disinfection-4954840_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/vacuum-cleaner-268179_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/coronavirus-4982040_1920.jpg' alt='#'></img>
                <ul>
                    <li>
                        자주 접촉하는 표면을 정기적으로 또는 필요에 따라 청소하고, 집에 방문자가 출입한 후에도 청소하세요.
                        여기에는 테이블, 문 손잡이, 전등 스위치, 조리대, 손잡이, 책상, 전화기, 키보드, 화장실, 수도꼭지 및 싱크대가 포함됩니다.
                    </li>
                    <li>
                        아프거나 COVID-19 양성 판정을 받은 사람이 있는 경우에는 자주 만지는 표면을 소독하세요.
                        <ul>
                            <li>EPA의 목록 N: 코로나(COVID-19)용 소독제외부 아이콘에 있는 가정용 살균제를 제조사 주의사항을 따라 사용하세요.</li>
                            <li>표면이 지저분한 경우 먼저 세제/비누와 물로 청소한 후 소독합니다.</li>
                        </ul>
                    </li>
                </ul>

                <div className='colorbox'>
                    <h3>매일 자신의 건강 상태를 모니터하기</h3>
                </div>
                <img className='imgbox' src='/img/space-center-693251_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/blood-pressure-1584223_1920.jpg' alt='#'></img>
                <img className='imgbox' src='/img/blood-pressure-monitor-1749577_1920.jpg' alt='#'></img>
                <ul>
                    <li>증상 여부에 주의
                        <ul>
                            <li>발열, 기침, 호흡곤란 또는 COVID-19 기타 증상이 있는지 관찰</li>
                            <li>증상이 나타나면 체온을 측정하세요.</li>
                            <li>체온은 운동한 후 30분 내, 또는 아세트아미노펜과 같이 체온을 낮출 수 있는 약을 복용한 후에 측정하시면 안 됩니다.</li>
                            <li>증상이 발생하면 CDC 지침을 따르세요.</li>
                        </ul>
                    </li>
                    <li>일상에 필요한 볼일을 보는 사람, 직장/일터로 출근하는 사람, 6피트 물리적 거리두기가 어려운 환경에 있는 사람에게는
                        증상 모니터링이 특히 더 중요합니다.</li>
                </ul><br />

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

export default Prevent;