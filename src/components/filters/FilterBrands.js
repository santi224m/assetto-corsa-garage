import React from 'react';
import { connect } from 'react-redux';
import { selectBrand, fetchBrands } from '../../actions';
import { Helmet } from 'react-helmet';

import FilterCard from '../FilterCard';

class FilterBrands extends React.Component {
  componentDidMount() {
    if (this.props.brands.length === 0) {
      this.props.fetchBrands();
    }
  }

  renderBrandCards() {
    return this.props.brands
      .sort((a, b) => {
        if (a.brandName > b.brandName) {
          return 1;
        } else if (a.brandName < b.brandName) {
          return -1;
        } else {
          return 0;
        }
      })
      .map(brand => {
        return (
          <FilterCard
            key={brand.id}
            link='/list'
            labelText={brand.brandName}
            imgSrc={brand.logoURl}
            onClick={() => this.props.selectBrand(brand.brandName)}
          />
        );
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Assetto Corsa Garage | Brands</title>
          <meta name='description' content='Filter Assetto Corsa mods by their brands' />
        </Helmet>
        <div className='filter-page'>
          <p className='filter-title'>Filter by Brand</p>
          <div className='ui grid brands-grid'>{this.renderBrandCards()}</div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedFilters: state.selectedFilters,
    brands: Object.values(state.brands)
  };
};

export default connect(mapStateToProps, { selectBrand, fetchBrands })(FilterBrands);
