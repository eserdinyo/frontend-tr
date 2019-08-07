import React from 'react'
import { MapPin, Globe } from 'react-feather';

import { getTags } from '../utils';

const company = ({ name, city, www, tech }) => {
    return (

        <div className="d-flex flex-column flex-fill company">
            <div className="text-center py-3 font-weight-bold text-uppercase">
                {name}
            </div>
            <div className="mb-4 p-4">
                {
                    getTags(tech).map((el, idx) =>
                        (
                            <div key={idx} className="d-inline-block border rounded px-2 m-1 text-muted bg-white" style={{ fontSize: 13 }}>{el}</div>
                        )
                    )
                }
            </div>
            <div className="d-flex justify-content-between align-items-center mt-auto py-2 border-top px-3">
                <div className="d-flex justify-content-between align-items-center">
                    <MapPin color="#c8cfdc" size={14} />
                    <p className="mb-0 ml-2" style={{ fontSize: 14, color: '#444' }}>{city}</p>
                </div>
                <div className="company__www">
                    <a target="_blank" href={www}><Globe color="#c8cfdc" size={14} /></a>
                </div>
            </div>
        </div>

    )
}

export default company;