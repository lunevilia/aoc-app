import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
const MaskGuide = () => {
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/MaskMain.jpg" });
    dispatch({ type: 'PAGE', payload: "마스크 의무 행정 지침" });
    return (
        <div className='maskGuideWrap'>
            <div className='maskGuide'>
                <h2>마스크 의무 행정 지침</h2>
                <h3>마스크 착용 의무화 장소 & 대상</h3>
                <div className='maskDiv'>
                    <div className='maskChildDiv' >
                        <p>실내 전체 및 실외</p>
                        <p>2M 이상 거리유지 안되는 경우 착용</p>
                        <img className='maskImg' src='/img/2mContain.png' />
                    </div>
                    <div className='maskChildDiv'>
                        <p>다중이용시설 관리자 or 운영자</p>
                        <p>시설 이용자 마스크 착용 안내</p>
                        <img className='maskImg' src='/img/MaskGuiding.png' />
                    </div>
                </div >

                <h3>마스크 종류 및 착용법</h3>
                <div className='maskDiv'>
                    <div className='maskChildDiv' >
                        <p>식약처에서 '의약외품'으로 허가받은</p>
                        <p>보건용 마스크, 비말차단 마스크</p>
                        <p>수술용 마스크 강력 권고</p>
                        <img className='maskImg' src='/img/maskType.png' />
                    </div>
                    <div className='maskChildDiv'>
                        <p className='masking4'>입과 코를 완전히 가리게 착용</p>

                        <img className='maskImg masking4' src='/img/maskWear.png' />
                    </div>
                </div >

                <h3>과태료 부과 관련</h3>
                <div className='maskDiv'>
                    <div className='maskChildDiv' >
                        <p>마스크 착용 지침 준수 명령 위반</p>
                        <p>횟수 상관없이 10만원 이하 과태료 부과</p>
                        <img className='maskImg' src='/img/maskFine.png' />
                    </div>
                    <div className='maskChildDiv'>
                        <p>위반행위 적발 시, 착용을 지도하고</p>
                        <p>불이행 시, 단속근거 설명 및 과태료 부과</p>

                        <img className='maskImg' src='/img/maskFine2.png' />
                    </div>
                </div >
            </div>
            <div className='bottom'>
                <h5 className="bottom_heading">Related Posts</h5>
                <br /><br /><br /><br /><br /><br />

                <div className="bottom_content">


                    <div className="bottom_post">
                        <Link to="/manage">
                            <img className="phoneImage" alt="iPhone_01" src="img/GuideMain.jpg" />
                            <a className='phoneImage_a'>코로나 방역 지침</a>
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

export default MaskGuide;