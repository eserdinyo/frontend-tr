import React from 'react';
import { useDispatch } from 'react-redux';

import * as actions from '../store/actions';


import logo from '../assets/logo.jpg'

function Header() {
    const dispatch = useDispatch();

    const getCompanies = () => {
        dispatch(actions.fetchCompanies());
    }

    return (
        <div className="shadow-sm">
            <div className="container d-flex align-items-center justify-content-between mb-5 py-3 ">
                <img onClick={getCompanies} src={logo} alt="" style={{ height: 80, cursor: 'pointer' }} />
                <a className="btn btn-success btn- px-5" target="_blank" style={{ fontSize: 16 }} href="https://github.com/frontendistanbul/technologies">Yeni Şirket Ekle</a>
            </div>
        </div>
    )
}

export default Header