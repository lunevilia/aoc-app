import React from 'react';
import VaccineMenu from './VaccineMenu';

const ChildVaccine = () => {
    return (
        <VaccineMenu activeMenu="ChildVaccine">
            <h3>소아 백신 접종 안내</h3>
            <div>만 5~11세 소아를 대상으로 한 기초 접종은 화이자가 개발한 소아용 백신 활용</div>
            <br/>
            <div className="vaccine_info_wrap">
                <dt className="normal_title">대상 연령</dt> 
                <dd className="normal_info">5~11세</dd> 
                <dt className="normal_title">허가일자</dt> 
                <dd className="normal_info">22.2.23</dd>
                <dt className="normal_title">바이알 캡</dt> 
                <dd className="normal_info">오렌지색</dd>
                <dt className="normal_title">접종량</dt> 
                <dd className="normal_info">10㎍(주사액 0.2㎖)</dd>
            </div>
            <br/>

            <div className="vaccine_info_wrap">
            <h3>소아 백신 기초접종(1차·2차접종)대상</h3>
            <div>
                만 5~11세 어린이(2010년생 중 생일이 지나지 않은 소아부터 2017년생 중 생일이 지난 소아)
            </div>
            <br/>

            <h3>소아 백신접종 일정 & 사전예약 안내</h3>
            <div>
            소아 백신 기초접종 사전예약은 3월 24일(목)부터 코로나19 예방접종 사전예약 시스템 홈페이지(<a href="https://ncvr2.kdca.go.kr/" target="_blank">https://ncvr2.kdca.go.kr/</a>)를 통해 예약이 가능합니다. <br/>
            실제 백신 접종은 3월 31일(목)부터 지정 위탁의료기관을 방문해 접종을 받을 수 있습니다. <br/>
            사전예약 및 실제 접종 시기는 백신 도입 일정에 따라 변경될 수 있습니다.
            </div>
            <br/>
            </div>
            
            <br/>
            <div className='source_area'>
                자료 출처 <br/><br/> 
                <a href='http://ncov.mohw.go.kr/tcmBoardView.do?brdId=3&brdGubun=31&dataGubun=&ncvContSeq=6475&board_id=312&contSeq=6475' target="_blank">코로나바이러스감염증19 소아 기초접종</a>
            </div>
        </VaccineMenu>
    );
};

export default ChildVaccine;