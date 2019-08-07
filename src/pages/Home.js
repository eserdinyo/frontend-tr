import React from 'react';
import { useSelector } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Company from '../components/Company';
import Sidebar from '../components/Sidebar';

function Home() {

  const companies = useSelector(state => state.companiesReducer.companies)


  return (
    <div className="container">
      <div className="d-flex">
        <Sidebar />
        <div className="main">
          {
            companies.map(company =>
              <CSSTransitionGroup
                transitionName="example"
              >
                <Company key={company.name} {...company} />
              </CSSTransitionGroup>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;