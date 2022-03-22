import React from 'react';
import { useDispatch } from 'react-redux';
const Guide = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/GuideMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나 코로나 방역지침" });

    return (
        <div className='guide'>
            <h2>코로나 코로나 방역지침</h2>
        </div>
    );
};

export default Guide;