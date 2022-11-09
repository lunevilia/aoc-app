import { useParams } from "react-router-dom";
import VaccineMenu from "./VaccineMenu";
import vac1_1 from '../img/syringe-5882593_1920.jpg';
const data = {
    Pfizer: {
        title: '화이자',
        inoculation_frequency: '2회, 21일',
        platform: 'mRNA 백신(핵산백신)',
        vaccine_name: '코미나티주',
        age: '12세 이상',
        composition: '다회 투여용 바이알',
        inoculum: '희석된 백신 0.3㎖, 근육주사',
        distribution: '-90℃∼-60℃(6개월)2∼8℃(31일)',
        storage: '희석 후 2℃∼25℃ 6시간'
    },
    Moderna: {
        title: '모더나',
        inoculation_frequency: '2회, 28일',
        platform: 'mRNA 백신(핵산백신)',
        vaccine_name: '모더나코비드-19백신주',
        age: '18세 이상',
        composition: '다회 투여용 바이알',
        inoculum: '0.5㎖, 근육주사',
        distribution: '2~8℃(30일)',
        storage: '2∼25℃ 6시간'
    },
    Janssen: {
        title: '얀센',
        inoculation_frequency: '1회',
        platform: '바이러스 벡터 백신',
        vaccine_name: '코비드19백신얀센주',
        age: '18세 이상',
        composition: '다회 투여용 바이알',
        inoculum: '0.5㎖, 근육주사',
        distribution: '2~8℃(3개월)',
        storage: '2∼8℃ 6시간, 9~25℃ 3시간'
    },
    AstraZeneca: {
        title: '아스트라제네카',
        inoculation_frequency: '2회, 8-12주 (*허가는 4-12주)',
        platform: '바이러스 벡터 백신',
        vaccine_name: '한국아스트라제네카코비드-19백신',
        age: '18세 이상',
        composition: '다회 투여용 바이알',
        inoculum: '0.5㎖, 근육주사',
        distribution: '2~8℃(6개월)',
        storage: '30℃이하 6시간'
    },
    Novavax: {
        title: '노바백스',
        inoculation_frequency: '2회, 21일',
        platform: '유전자 재조합 백신',
        vaccine_name: '뉴백소비드프리필드시린지',
        age: '18세 이상',
        composition: '프리필드시린지',
        inoculum: '0.5㎖, 근육주사',
        distribution: '2~8℃(5개월)',
        storage: '사용 직전까지 2℃∼8℃ 냉장상태 유지'
    },
};

function VaccineInfo({ activeMenu }) {
    const params = useParams();
    const vaccine = data[params.keyword];

    if (!vaccine) {
        return (
            <VaccineMenu>
                <div className="vaccine_img_box">
                    <img className="phoneImage" alt="iPhone_01" src={vac1_1} />
                </div>
            </VaccineMenu>
        );

    }

    return (
        <VaccineMenu activeMenu={params.keyword}>
            <h3>
                {vaccine.title}
            </h3>
            <div className="vaccine_info_wrap">
                <dt className="normal_title">접종 횟수(간격)</dt>
                <dd className="normal_info">{vaccine.inoculation_frequency}</dd>
                <dt className="normal_title">플랫폼</dt>
                <dd className="normal_info">{vaccine.platform}</dd>
                <dt className="normal_title">백신명</dt>
                <dd className="normal_info">{vaccine.vaccine_name}</dd>
                <dt className="normal_title">연령</dt>
                <dd className="normal_info">{vaccine.age}</dd>
                <dt className="normal_title">구성</dt>
                <dd className="normal_info">{vaccine.composition}</dd>
                <dt className="normal_title">접종량 및 방법</dt>
                <dd className="normal_info">{vaccine.inoculum}</dd>
                <dt className="normal_title">유통</dt>
                <dd className="normal_info">{vaccine.distribution}</dd>
                <dt className="normal_title">개봉 후 저장</dt>
                <dd className="normal_info">{vaccine.storage}</dd>
            </div>

        </VaccineMenu>
    );
}

export default VaccineInfo;