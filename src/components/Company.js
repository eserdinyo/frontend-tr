import React from 'react'
import { MapPin, Globe } from 'react-feather';

import { getTags } from '../utils';

const company = ({ name, city, www, tech }) => {
    return (
        <div className="company">
            <div className="company__head">
                {name}
            </div>
            <div className="company__body">
                {
                    getTags(tech).map((el, idx) =>
                        (
                            <div key={idx} className="company__tag">{el}</div>
                        )
                    )
                }
            </div>
            <div className="company__footer">
                <div className="company__location">
                    <MapPin color="#c8cfdc" size={14} />
                    <p>{city}</p>
                </div>
                <div className="company__www">
                    <a target="_blank" href={www}><Globe color="#c8cfdc" size={14} /></a>
                </div>
            </div>
        </div>
    )
}

export default company;