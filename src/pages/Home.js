import React from 'react';
import { useSelector } from 'react-redux';

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
             
                <Company key={company.name} {...company} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;