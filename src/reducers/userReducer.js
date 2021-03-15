const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload.id, userName: action.payload.name };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null, userName: null };
        default:
            return state;
    }
};
