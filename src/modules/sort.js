// Sort options used by sort dropdown
export const sortByBrand = (a, b) => {
    if (a.brand < b.brand) {
        return -1;
    }
    if (a.brand > b.brand) {
        return 1;
    }
    return 0;
};

export const sortByYear = (a, b) => {
    if (a.year < b.year) {
        return -1;
    }
    if (a.year > b.year) {
        return 1;
    }
    return 0;
};

export const sortByDateAdded = (a, b) => {
    if (a.dateAdded < b.dateAdded) {
        return -1;
    }
    if (a.dateAdded > b.dateAdded) {
        return 1;
    }
    return 0;
};
