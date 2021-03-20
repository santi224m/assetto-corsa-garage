const INITIALsTATE = {
    brand: null,
    model: '',
    year: '',
    imgURL: null,
    modURL: '',
    transmission: null,
    carClass: null,
    createdBy: null,
    dateAdded: null,
    showReview: false,
};

export default (state = INITIALsTATE, action) => {
    switch (action.type) {
        case 'SET_FORM_MOD_LINK':
            return { ...state, modURL: action.payload };
        case 'SET_FORM_BRAND':
            return { ...state, brand: action.payload };
        case 'SET_FORM_MODEL':
            return { ...state, model: action.payload };
        case 'SET_FORM_YEAR':
            return { ...state, year: action.payload };
        case 'SET_FORM_TRANSMISSION':
            return { ...state, transmission: action.payload };
        case 'SET_FORM_CAR_CLASS':
            return { ...state, carClass: action.payload };
        case 'SET_FORM_IMAGE_URL':
            return { ...state, imgURL: action.payload };
        case 'SET_FORM_CREATED_BY':
            return { ...state, createdBy: action.payload };
        case 'SET_FORM_DATE_ADDED':
            return { ...state, dateAdded: action.payload };
        case 'SET_FORM_SHOW_REVIEW':
            return { ...state, showReview: action.payload };
        case 'CLEAR_FORM':
            return INITIALsTATE;
        default:
            return state;
    }
};
