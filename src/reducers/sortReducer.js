// Select current sort method for sort dropdown
export default (state = { sortName: 'nameDown' }, action) => {
    switch (action.type) {
        case 'SELECT_SORT':
            return { ...state, sortName: action.payload };
        default:
            return state;
    }
};
