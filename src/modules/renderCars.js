import Car from '../components/Car';

export const renderCars = (props, filteredCarsArr) => {
    return filteredCarsArr.map(car => {
        const paginationStartIndex = props.pagination.startIndex;
        const paginationEndIndex = props.pagination.endIndex;

        // Don't show cars that aren't in pagination range
        if (filteredCarsArr && (filteredCarsArr.indexOf(car) < paginationStartIndex || filteredCarsArr.indexOf(car) > paginationEndIndex)) {
            return;
        }

        // Create search link for wikipedia
        const baseWikiURL = 'https://en.wikipedia.org/wiki/';
        const carToPathName = `${car.brand} ${car.model}`.replace(/ /g, '_');
        const carWikiURL = baseWikiURL + carToPathName;

        return (
            <Car
                key={car.id}
                brand={car.brand}
                model={car.model}
                img={car.imgURL}
                link={car.modURL}
                transmission={car.transmission}
                year={car.year}
                wikiLink={carWikiURL}
            />
        );
    });
};
