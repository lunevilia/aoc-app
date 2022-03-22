import React from 'react';
import ApiCall from './ApiCall';
import { useSelector } from 'react-redux';
import './Current.css';
const Current = () => {
    const crtgubun = useSelector((state) => state.crtgubun);
    const crtincDec = useSelector((state) => state.crtincDec);
    const crtTotal = useSelector((state) => state.crtTotal);
    return (
        <div className='current'>
            <h2>현황</h2>
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