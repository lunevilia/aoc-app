import React from 'react';
import ApiCall from './ApiCall';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Current.css';

import current_l from './img/SymptomMain.jpg';
import current_l2 from './img/PreventMain.jpg';

import reImg from './img/CurrentMain.jpg';
const Current = () => {
    const crtgubun = useSelector((state) => state.crtgubun);
    const crtincDec = useSelector((state) => state.crtincDec);
    const crtTotal = useSelector((state) => state.crtTotal);

    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: reImg });
    dispatch({ type: 'PAGE', payload: "코로나 현황 보기" });

    return (
        <div className='currentWrap'>
            <div className='current'>
                <h2>코로나 현황 보기</h2>
                <div className='currentDiv'>
                    <div><p>지역</p><hr color="gray" size="6" /><p>{crtgubun}</p></div>
                    <div><p>전일 대비 증가수</p><hr color="gray" size="6" /><p>{crtincDec}</p></div>
                    <div><p>누적 확진자 수</p><hr color="gray" size="6" /><p>{crtTotal}</p></div>
                </div>
                <ApiCall />
            </div >
            <hr />
            <div className='bottom'>
                <h5 className="bottom_heading">Related Posts</h5>
                <br />
            </div>

            <div className="bottom_content">


                <div className="bottom_post">
                    <Link to="/manage">
                        <img className="phoneImage" alt="iPhone_01" src={current_l} />
                        <a className='phoneImage_a'>코로나 증상</a>
                    </Link>



                    <Link to="/isolation">
                        <img className="phoneImage" alt="iPhone_01" src={current_l2} />
                        <a className='phoneImage_a'>코로나 예방 방법</a>
                    </Link>
                </div>



            </div>
        </div>
    );
};

export default Current;