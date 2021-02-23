export default (state = { selectedBrand: null, selectedClass: null, selectedDecade: null, selectedShifter: null }, action) => {
    switch(action.type) {
        case 'SELECT_BRAND':
            return { ...state, selectedBrand: action.payload };
        case 'SELECT_CLASS':
            return { ...state, selectedClass: action.payload };
        case 'SELECT_DECADE':
            return { ...state, selectedDecade: action.payload };
        case 'SELECT_SHIFTER':
            return { ...state, selectedShifter: action.payload };
        case 'RESET_FILTERS':
            return { ...state, selectedBrand: null, selectedClass: null, selectedDecade: null, selectedShifter: null };
        default:
            return state;
    }
}