import React from 'react';
import { useDispatch } from 'react-redux';
const Isolation = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/IsolationMain.jpg" });
    dispatch({ type: 'PAGE', payload: "격리 후 조치" });
    return (
        <div className='isolation'>
            <h2>격리 후 조치</h2>
        </div>
    );
};

export default Isolation;