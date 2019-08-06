import React from 'react'
import logo from '../assets/logo.jpg'

const header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__content">
                    <img src={logo} alt="" className="logo" />
                    <div className="nav">
                        <a className="btn" target="_blank" href="https://github.com/frontendistanbul/technologies">Yeni Şirket Ekle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header;