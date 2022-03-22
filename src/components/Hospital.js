import React from 'react';
import { useDispatch } from 'react-redux';
const Hospital = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/HospitalMain.jpg" });
    dispatch({ type: 'PAGE', payload: "인근 병원" });
    return (
        <div className='hospital'>
            <h3>인근 병원</h3>
        </div>
    );
};

export default Hospital;