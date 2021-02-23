import _ from 'lodash';

export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_CAR_INFO':
            console.log(action.payload)
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        default:
            return state;
    }
}