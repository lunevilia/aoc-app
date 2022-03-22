import React from 'react';

export default function reducer(currentState, action) {
    // 현재 state 값이 정의되지 않았으면 기본 state 값 변환
    if (currentState === undefined) {
        return {
            count: '/',
            crtgubun: '미선택',
            crtincDec: '미선택',
            crtTotal: '미선택',
            LeftImgSrc: '',
            LeftTitle: "Home",
            mainCrtMap: "viewCrtMap"
        }     // 기본 state 값 1로 지정
    }

    // 각 state의 불변성을 유지하기 위한 방법으로
    // 과거의 state를 복제해서 사용
    // 복제본 수정하면 불변성 유지
    const newState = { ...currentState };

    ////////////////////////////////////////////////////
    // 나중에 여기서 state 값 변경 { action type에 따라 }

    if (action.type === "GUBUN") {
        newState.crtgubun = action.payload;
    }
    if (action.type === "INCDEC") {
        newState.crtincDec = action.payload;
    }
    if (action.type === "TOTAL") {
        newState.crtTotal = action.payload;
    }
    if (action.type === "PAGE") {
        newState.LeftTitle = action.payload;
    }
    if (action.type === "PAGEImg") {
        newState.LeftImgSrc = action.payload;
    }
    if (action.type === "CrtMapState") {
        newState.mainCrtMap = action.payload;
    }
    // 변화시킨 값을 반환
    return newState;

    // 반환된 값이 새로운 state 값이 됨

};
