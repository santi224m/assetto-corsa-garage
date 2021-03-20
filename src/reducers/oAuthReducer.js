const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    userName: null,
    modsVerified: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...state,
                isSignedIn: true,
                userId: action.payload.id,
                userName: action.payload.name,
                modsVerified: action.payload.modsVerified,
            };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null, userName: null };
        default:
            return state;
    }
};
