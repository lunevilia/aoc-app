import React from 'react';
import { useDispatch } from 'react-redux';
const Vaccine = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/VaccineMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나 백신" });
    return (
        <div className='vaccine'>
            <h2>코로나 백신</h2>
        </div>
    );
};

export default Vaccine;