import * as constants from '../constants';
import companies from '../../api';


const initialState = {
    companies,
}

const companiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.FETCH_COMPANIES:
            return { ...state, companies: [...companies] }

        case constants.FETCH_BY_CITIES:
            const updatedCompanies = companies.filter(el => el.city === payload)

            return { ...state, companies: [...updatedCompanies] }

        default:
            return state;
    }
}

export default companiesReducer;