import * as constants from '../constants';
import companies from '../../api';


const initialState = {
    companies: companies,
}

const companiesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case constants.FETCH_COMPANIES:
            return { ...state, companies: [...payload] }
        default:
            return state;
    }
}

export default companiesReducer;