import React from 'react';
import { connect } from 'react-redux';
import { selectBrand, fetchBrandsCustom } from '../../actions';

import FilterCard from '../FilterCard';

class FilterBrands extends React.Component {
    componentDidMount() {
        if(this.props.brands.length === 0) {
            this.props.fetchBrandsCustom('../json/brands.json');
        }
    }

    renderBrandCards() {
        return this.props.brands.map(brand => {
            return <FilterCard key={brand.id} link="/list" labelText={brand.brand} imgSrc={`../img/brands/${brand.brand}.png`} onClick={() => this.props.selectBrand(brand.brand)} />
        });
    }

    render() {
        return (
            <div>
                <div className="ui grid">
                    {this.renderBrandCards()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { selectedFilters: state.selectedFilters, brands: Object.values(state.brands) };
}

export default connect(mapStateToProps, { selectBrand, fetchBrandsCustom })(FilterBrands);