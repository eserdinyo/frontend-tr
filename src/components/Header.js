import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../store/actions';


import logo from '../assets/logo.jpg'

function Header() {
    const dispatch = useDispatch();

    const getCompanies = () => {
        dispatch(actions.fetchCompanies());
    }

    return (
        <div className="shadow-sm header">
            <div className="container d-flex align-items-center justify-content-between mb-5 py-3 ">
                <Link to='/'>
                    <img onClick={getCompanies} src={logo} alt="" style={{ height: 80, cursor: 'pointer' }} />
                </Link>
                <div className="d-flex align-items-center">
                    <Link to='/istatistik' className="btn btn-dark px-5 mr-3 darkmode-ignore" style={{ fontSize: 16 }}>İstatistikler</Link>
                    <a className="btn btn-success px-5 darkmode-ignore" target="_blank" style={{ fontSize: 16 }} href="https://github.com/frontendistanbul/technologies">Yeni Şirket Ekle</a>
                </div>
            </div>
        </div>
    )
}

export default Header