import React from 'react';
import{Link} from 'react-router-dom';

function VaccineMenu ({children, activeMenu}) {
    return (
        <div>
            <div className='btn_area'>
                    <ul>
                        <li className='Vaccioneli'><Link to="/vaccine/vaccineInfo/Pfizer" 
                            className={activeMenu === 'Pfizer' ? 'focused' : 'link'}>화이자</Link></li>
                        <li className='Vaccioneli'><Link to="/vaccine/vaccineInfo/Moderna"
                            className={activeMenu === 'Moderna' ? 'focused' : 'link'}>모더나</Link></li>
                        <li className='Vaccioneli'><Link to="/vaccine/vaccineInfo/Janssen"
                            className={activeMenu === 'Janssen' ? 'focused' : 'link'}>얀센</Link></li>
                        <li className='Vaccioneli'><Link to="/vaccine/vaccineInfo/AstraZeneca"
                            className={activeMenu === 'AstraZeneca' ? 'focused' : 'link'}>아스트라제네카</Link></li>
                        <li className='Vaccioneli'><Link to="/vaccine/vaccineInfo/Novavax"
                            className={activeMenu === 'Novavax' ? 'focused' : 'link'}>노바백스</Link></li>
                        <li className='Vaccioneli'><Link to="/vaccine/ChildVaccine"
                            className={activeMenu === 'ChildVaccine' ? 'focused' : 'link'}>소아 백신</Link></li>
                    </ul>
                </div>

            <div className='vaccine_container'>
                {children}
            </div>
        </div>
    );
};

export default VaccineMenu;