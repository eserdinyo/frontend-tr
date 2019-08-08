import companies from '../api';


export const getTags = str => str.split(',').map(item => item.replace(' ', ''))

export const getCityCount = city => companies.filter(comp => comp.city === city).length;

export const getTechCount = tech => companies.filter(el => el.tech.toLowerCase().includes(tech.toLowerCase())).length;
