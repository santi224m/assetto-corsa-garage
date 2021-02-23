import _ from 'lodash';

export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BRANDS':
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        case 'FETCH_BRANDS_CUSTOM':
            return { ...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}