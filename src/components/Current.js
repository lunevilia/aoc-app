import React from 'react';
import ApiCall from './ApiCall';
import { useSelector, useDispatch } from 'react-redux';
import './Current.css';
const Current = () => {
    const crtgubun = useSelector((state) => state.crtgubun);
    const crtincDec = useSelector((state) => state.crtincDec);
    const crtTotal = useSelector((state) => state.crtTotal);

    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/CurrentMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나 현황 보기" });

    return (
        <div className='current'>
            <h2>코로나 현황 보기</h2>
            <div className='currentDiv'>
                <div><p>지역</p><hr color="gray" size="6" /><p>{crtgubun}</p></div>
                <div><p>전일 대비 증가수</p><hr color="gray" size="6" /><p>{crtincDec}</p></div>
                <div><p>누적 확진자 수</p><hr color="gray" size="6" /><p>{crtTotal}</p></div>
            </div>
            <ApiCall />
        </div >
    );
};

export default Current;