import React from 'react';
import { useDispatch } from 'react-redux';
const Manage = () => {
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/ManageMain.jpg" });
    dispatch({ type: 'PAGE', payload: "확진 후 관리" });
    return (
        <div className='manage'>
            <h2>확진 후 관리</h2>
        </div>
    );
};

export default Manage;