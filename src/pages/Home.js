import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Company from '../components/Company';
import Sidebar from '../components/Sidebar';
import * as actions from '../store/actions';

function Home() {
  const dispatch = useDispatch();

  const companies = useSelector(state => state.companiesReducer.copyCompanies)

  useEffect(() => {
    dispatch(actions.fetchCompanies());

    // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <div className="d-md-flex">
        <Sidebar />
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
      </div>
    </div>
  )
}

export default Home;