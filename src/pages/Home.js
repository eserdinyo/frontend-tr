import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Company from '../components/Company';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import * as actions from '../store/actions';

function Home() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.companiesReducer.loading);
  const companies = useSelector(state => state.companiesReducer.copyCompanies)

  return (
    <div className="container">
      <div className="d-md-flex">
        <Sidebar />


        {
          loading ?
            <Loader/>
            : (
              <div className="main">
                {
                  companies.map(company =>
                    <CSSTransitionGroup
                      transitionName="example"
                      transitionEnterTimeout={300}
                      transitionLeaveTimeout={500}
                      key={company.name}
                    >

                      <Company {...company} />
                    </CSSTransitionGroup>

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