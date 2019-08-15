import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';


import Company from '../components/Company';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

function Home() {

  const loading = useSelector(state => state.companiesReducer.loading);
  const companies = useSelector(state => state.companiesReducer.copyCompanies)
  const dispatch = useDispatch();


  useEffect(() => {
    return () => {
      dispatch(actions.resetCompanies());
    }
  }, [])
  return (
    <div className="container">
      <div className="d-md-flex">
        <Sidebar />
        {
          loading ?
            <Loader />
            : (
              <div className="main">
                {
                  companies.map(company =>
                    <Company key={company.name} {...company} />
                  )
                }
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Home;