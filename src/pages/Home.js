import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import Company from '../components/Company';
import Sidebar from '../components/Sidebar';

function Home() {

  const companies = useSelector(state => state.companiesReducer.companies)


  axios.get('https://github.com/jamesplease/color-test')
    .then(res => {
      console.log(res);
    })


  return (
    <div className="container">
      <div className="d-md-flex">
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