export default (state = { totalItems: 43, currentPage: 1, pageSize: 12, totalPages: 4, startPage: 1, endPage: 4, startIndex: 0, endIndex: 11, pages: 4}, action) => {
    switch(action.type) {
        case 'UPDATE_TOTAL_ITEMS':
            return { ...state, totalItems: action.payload}
        case 'UPDATE_CURRENT_PAGE':
            return { ...state, currentPage: action.payload}
        case 'UPDATE_PAGE_SIZE':
            return { ...state, pageSize: action.payload}
        case 'UPDATE_TOTAL_PAGES':
            return { ...state, totalPages: action.payload}
        case 'UPDATE_START_PAGE':
            return { ...state, startPage: action.payload}
        case 'UPDATE_END_PAGE':
            return { ...state, endPage: action.payload}
        case 'UPDATE_START_INDEX':
            return { ...state, startIndex: action.payload}
        case 'UPDATE_END_INDEX':
            return { ...state, endIndex: action.payload}
        case 'UPDATE_PAGES':
            return { ...state, pages: action.payload}
        default: 
            return state;
    }
}