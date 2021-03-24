import BrandOption from '../components/dropdown/options/BrandOption';
import ClassOption from '../components/dropdown/options/ClassOption';
import DecadeOption from '../components/dropdown/options/DecadeOption';
import ShifterOption from '../components/dropdown/options/ShifterOption';
import SortOption from '../components/dropdown/options/SortOption';

export const renderBrandsOptions = props => {
    return (
        props.brands
            // Sort alphabetically
            .sort((a, b) => {
                if (a.brandName < b.brandName) {
                    return -1;
                }
                if (a.brandName > b.brandName) {
                    return 1;
                }
                return 0;
            })
            .map(brand => {
                return <BrandOption key={brand.id} props={props} brand={brand} />;
            })
    );
};

export const renderClassOptions = props => {
    return (
        <>
            <ClassOption props={props} value={null} />
            <ClassOption props={props} value='Road' />
            <ClassOption props={props} value='Race' />
            <ClassOption props={props} value='Prototype' />
            <ClassOption props={props} value='Open Wheel' />
        </>
    );
};

export const renderDecadesOptions = props => {
    return (
        <>
            <DecadeOption props={props} value={null} />
            <DecadeOption props={props} value={1950} />
            <DecadeOption props={props} value={1960} />
            <DecadeOption props={props} value={1970} />
            <DecadeOption props={props} value={1980} />
            <DecadeOption props={props} value={1990} />
            <DecadeOption props={props} value={2000} />
            <DecadeOption props={props} value={2010} />
        </>
    );
};

export const renderShifterOptions = props => {
    return (
        <>
            <ShifterOption props={props} value={null} />
            <ShifterOption props={props} value='Manual' />
            <ShifterOption props={props} value='Paddle Shifter' />
            <ShifterOption props={props} value='Sequential' />
        </>
    );
};

export const renderDropdownOptions = props => {
    return (
        <>
            <SortOption props={props} value='nameDown' displayText='Brand Name ↓' />
            <SortOption props={props} value='nameUp' displayText='Brand Name ↑' />
            <SortOption props={props} value='yearNew' displayText='Year: Newest' />
            <SortOption props={props} value='yearOld' displayText='Year: Oldest' />
            <SortOption props={props} value='dateAddedNew' displayText='Date Added: Newest' />
            <SortOption props={props} value='dateAddedOld' displayText='Date Added: Oldest' />
        </>
    );
};
