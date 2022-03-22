import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KorMap from './KorMap';


function ApiCall() {

    const [data, setData] = useState("");

    const url = "openapi/service/rest/Covid19/getCovid19SidoInfStateJson";
    const ServiceKey = "d0IOcXop1rDS9AinwOgx5Baoh5igfHAUWyWCtmPWKVoesqPZzwesG9zFDIhopO0n2Bg7ojMH7RkdHfb1%2FdRCsg%3D%3D";

    const result = axios.get(url + '?ServiceKey=' + ServiceKey);

    useEffect(() => {
        function getResult() {
            return new Promise((resolve, reject) => {
                if (result) {
                    resolve(result)
                }
                reject("응답이 거절되었습니다.");
            })
        }

        getResult().then(function (showData) {
            const requestDate = showData.data.response.body.items.item;

            const gubunData = new Array();
            const incDecData = new Array();
            const totalData = new Array();
            const finalData = new Object();
            //
            console.log(data)
            for (let i = 0; i < requestDate.length; i++) {
                gubunData.push(requestDate[i].gubun);
                incDecData.push(requestDate[i].incDec);
                totalData.push(requestDate[i].defCnt);
            }

            finalData['gubun'] = gubunData;
            finalData['incDec'] = incDecData;
            finalData['total'] = totalData;
            console.log(finalData);
            setData(finalData);
        });

        getResult();
    }, []);
    setTimeout(console.log(result), 5000);
    console.log(data)

    const covid = data;
    return (
        <div>

            <KorMap apiResult={covid}></KorMap>

        </div>
    );
};

export default ApiCall;