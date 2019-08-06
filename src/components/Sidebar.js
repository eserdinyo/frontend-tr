import React from 'react'

const sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__title">
                <h3>Şehirler</h3>
            </div>
            <div className='sidebar__link'>
                <a href="#">İstanbul</a>
                <a href="#">İzmir</a>
            </div>
        </div>
    )
}

export default sidebar;