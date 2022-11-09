import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ApiCall from './ApiCall';

const Top = () => {
    const crtgubun = useSelector((state) => state.crtgubun);
    const crtincDec = useSelector((state) => state.crtincDec);
    const crtTotal = useSelector((state) => state.crtTotal);
    let [menuViewState, setMenuViewState] = useState("MenuHidden");
    const location = useLocation()
    const LeftImgSrc = useSelector((state) => state.LeftImgSrc);
    const LeftTitle = useSelector((state) => state.LeftTitle);
    const dispatch = useDispatch();
    const ApiStyle = useSelector((state) => state.mainCrtMap);
    console.log(ApiStyle);


    const menuHiddenChange = () => {
        if (menuViewState === "MenuHidden") {
            setMenuViewState("MenuView");
        } else {
            setMenuViewState("MenuHidden");
        }
    }


    const TopLoadPage = () => {
        console.log(`${location.pathname}`);
    }
    return (
        <div className='leftFlexDiv' onLoad={TopLoadPage}>

            <div>
                <h3><Link to="/" className='menuHome'>AOC</Link></h3>
                <button className='menuBtn' onClick={menuHiddenChange}>Menu</button>
                <Link className='aboutBtn' to="/about">?</Link>






            </div>
            <div className='MainContent'>
                <div className='Leftside-left'>
                    <div className={ApiStyle} >
                        <div className='left-main-prevent'>
                            <div><h2>코로나 예방수칙</h2></div>
                            <div><p> 1. 백신 접종</p></div>
                            <div><p> 2. 마스크 착용</p></div>
                            <div><p> 3. 거리 두기</p></div>
                            <div><p><Link to="/prevent"> ➤ 자세히 보러가기</Link></p></div>
                        </div>
                    </div>
                    <div className={ApiStyle} >
                        <div className='left-main-guide'>
                            <div><h2>사회적 거리두기</h2></div>
                            <div><p> 사적 모임 6~8인 조정</p></div>
                            <div><p> 다중 시설 운영 23시 까지</p></div>
                            <div><p> 행사.집회의 경우 접종 여부 관계 없이 최대 299명</p></div>
                            <div><p><Link to="/guide"> ➤ 자세히 보러가기</Link></p></div>
                        </div>
                    </div>
                </div>
                <div className='Leftside-right'>
                    <div className={ApiStyle} >
                        <div className=' '>
                            <div className='mainCurrentDiv' ><p>{crtgubun}</p></div>
                            <div className='mainCurrentDiv' ><p> 증가 : {crtincDec} | 누적 : {crtTotal}</p></div>
                            <ApiCall />
                        </div>
                    </div>
                </div>
            </div>
            <img className='MainImg' src={LeftImgSrc} />
            <h1 className='MainLeftTitle'>{LeftTitle}</h1>
            <div className={menuViewState}>
                <ul className='menuNavbar'>
                    <li><Link to="/" onClick={menuHiddenChange}>Home</Link></li>
                    <li><Link to="/current" onClick={menuHiddenChange}>코로나 현황 보기</Link></li>
                    <li><Link to="/prevent" onClick={menuHiddenChange}>코로나 예방 방법</Link></li>
                    <li><Link to="/guide" onClick={menuHiddenChange}>코로나 방역지침</Link></li>
                    <li><Link to="/symptom" onClick={menuHiddenChange}>코로나 증상</Link></li>
                    <li><Link to="/vaccine" onClick={menuHiddenChange}>코로나 백신</Link></li>
                    <li><Link to="/manage" onClick={menuHiddenChange}>코로나 확진 후 관리</Link></li>
                    <li><Link to="/isolation" onClick={menuHiddenChange}>코로나 자가 격리 시 주의 사항</Link></li>
                    <li><Link to="/maskGuide" onClick={menuHiddenChange}>마스크 의무 행정 지침</Link></li>
                    <li><Link to="/hospital" onClick={menuHiddenChange}>인근 병원 찾기</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Top;