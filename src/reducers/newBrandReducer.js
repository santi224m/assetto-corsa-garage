const INTIAL_STATE = {
    imgURL: null,
    brandName: '',
};

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_BRAND_FORM_IMG_URL':
            return { ...state, imgURL: action.payload };
        case 'SET_BRAND_FORM_NAME':
            return { ...state, brandName: action.payload };
        case 'CLEAR_BRAND_FORM':
            return { ...state, imgURL: null, brandName: '' };
        default:
            return state;
    }
};
