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

export const resetCompanies = () => {
    return {
        type: constants.RESET_COMPANIES
    }
}

export const setLoading = () => {
    return {
        type: constants.SET_LOADING
    }
}

