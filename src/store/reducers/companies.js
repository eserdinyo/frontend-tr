import * as constants from '../constants';

const initialState = {
    companies: [],
    copyCompanies: [],
    loading: true,
}

const companiesReducer = (state = initialState, { type, payload }) => {
    let updatedCompanies = [];
    let filteredCompanies = [];
    switch (type) {
        case constants.FETCH_COMPANIES_OK:

            return { ...state, companies: [...payload], copyCompanies: [...payload], loading: false }

        case constants.SET_LOADING:
            return { ...state, loading: true }

        case constants.RESET_COMPANIES:
            return { ...state, copyCompanies: [...state.companies] }

        case constants.FETCH_BY_CITIES:
            updatedCompanies = [...state.companies];
            filteredCompanies = updatedCompanies.filter(el => el.city === payload)
            return { ...state, copyCompanies: [...filteredCompanies] }

        case constants.FETCH_BY_TECH:
            updatedCompanies = [...state.companies];
            filteredCompanies = updatedCompanies.filter(el => el.tech.toLowerCase().includes(payload.toLowerCase()))
            return { ...state, copyCompanies: [...filteredCompanies] }

        default:
            return state;
    }
}

export default companiesReducer;