import Car from '../components/Car';

export const renderCars = (filteredCarsArr, startIndex, endIndex) => {
    return filteredCarsArr.map(car => {
        // Don't show cars that aren't in pagination range
        if (
            filteredCarsArr &&
            (filteredCarsArr.indexOf(car) < startIndex ||
                filteredCarsArr.indexOf(car) > endIndex)
        ) {
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
                carClass={car.carClass}
            />
        );
    });
};
