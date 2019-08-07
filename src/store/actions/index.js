import * as constants from '../constants';

export const fetchByCity = payload => {
    return {
        type: constants.FETCH_BY_CITIES,
        payload,
    }
}

export const fetchByTech = payload => {
    return {
        type: constants.FETCH_BY_TECH,
        payload,
    }
}

export const fetchCompanies = () => {
    return {
        type: constants.FETCH_COMPANIES,
    }
}

