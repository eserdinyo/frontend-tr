import * as constants from '../constants';
import companies from '../../api';


const initialState = {
    companies,
}

const companiesReducer = (state = initialState, { type, payload }) => {
    let updatedCompanies = [];
    switch (type) {
        case constants.FETCH_COMPANIES:
            return { ...state, companies: [...companies] }

        case constants.FETCH_BY_CITIES:
            updatedCompanies = companies.filter(el => el.city === payload)
            return { ...state, companies: [...updatedCompanies] }

        case constants.FETCH_BY_TECH:
            updatedCompanies = companies.filter(el => el.tech.toLowerCase().includes(payload.toLowerCase()))
            return { ...state, companies: [...updatedCompanies] }

        default:
            return state;
    }
}

export default companiesReducer;