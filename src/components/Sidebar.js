import React from 'react'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';

function Sidebar() {

    const dispatch = useDispatch();

    const getByCity = city => {
        dispatch(actions.fetchByCity(city));
    }

    const getByTech = tech => {
        dispatch(actions.fetchByTech(tech))
    }


    return (
        <div className="mr-5 mb-5" style={{ minWidth: '200px' }}>
            <div className="bg-dark text-white p-4 rounded-top darkmode-ignore d-block">
                Şehirler
            </div>
            <div className='d-flex flex-column'>
                <a onClick={() => getByCity('İstanbul')} className="px-4 py-2 border border-bottom-0" style={{ color: '#444' }} href="#">İstanbul</a>
                <a onClick={() => getByCity('İzmir')} className="px-4 py-2 border rounded-bottom" style={{ color: '#444' }} href="#">İzmir</a>
                <a onClick={() => getByCity('Ankara')} className="px-4 py-2 border rounded-bottom" style={{ color: '#444' }} href="#">Ankara</a>
            </div>

            <div className="bg-dark text-white p-4 rounded-top mt-5 darkmode-ignore  d-block">
                Framework
            </div>
            <div className='d-flex flex-column'>
                <a onClick={() => getByTech('React')} className="px-4 py-2 border border-bottom-0" style={{ color: '#444' }} href="#">React</a>
                <a onClick={() => getByTech('Vue')} className="px-4 py-2 border border-bottom-0" style={{ color: '#444' }} href="#">Vue</a>
                <a onClick={() => getByTech('Angular')} className="px-4 py-2 border" style={{ color: '#444' }} href="#">Angular</a>
            </div>
        </div>
    )
}

export default Sidebar;