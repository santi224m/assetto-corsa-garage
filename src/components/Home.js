import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openBrands, openClass, openDecades, openShifters, fetchBrands, selectBrand, selectClass, selectDecade, selectShifter, resetFilters } from '../actions';

import FilterCard from './FilterCard';

class Home extends React.Component {
    componentDidMount() {
        if(this.props.brands.length === 0) {
            this.props.fetchBrands();
        }
    }

    renderBrandsList() {
        return this.props.brands.sort((a, b) => {
            if(a.brand < b.brand) {
                return -1;
            }
            if(a.brand > b.brand) {
                return 1;
            }
            return 0;
        }).map(brand => {
            return (
                <div key={brand.id} className={`item ${this.props.selectedFilters.selectBrand === brand.brand ? 'active selected' : ''}`} data-value={brand.brand} onClick={() => this.props.selectBrand(brand.brand)} >{brand.brand}</div>
            );
        });
    }

    render() {
        return (
        <div>
            <div className="hero">
                <div className="text">Find the best<br/>mods for you</div>
                <div className="ui form">

                    <div className="three wide field">
                        <label>Brand</label>
                        <div className={`ui selection dropdown ${this.props.filterDropdowns.brandsOpen ? 'active visible' : ''}`} onClick={() => this.props.openBrands(!this.props.filterDropdowns.brandsOpen)}>
                            <input type="hidden" name="brand"/>
                            <i className="dropdown icon"></i>
                            <div className={`${this.props.selectedFilters.selectedBrand ? '' : 'default'} text`}>{this.props.selectedFilters.selectedBrand ? this.props.selectedFilters.selectedBrand : 'Brand'}</div>
                            <div className={`menu transition ${this.props.filterDropdowns.brandsOpen ? 'visible' : 'hidden'}`}>
                                {this.renderBrandsList()}
                            </div>
                        </div>
                    </div>

                    <div className="three wide field">
                        <label>Shifter</label>
                        <div className={`ui selection dropdown ${this.props.filterDropdowns.shiftersOpen ? 'active visible' : ''}`} onClick={() => this.props.openShifters(!this.props.filterDropdowns.shiftersOpen)}>
                            <input type="hidden" name="shifters"/>
                            <i className="dropdown icon"></i>
                            <div className={`${this.props.selectedFilters.selectedShifter ? '' : 'default'} text`}>{this.props.selectedFilters.selectedShifter ? this.props.selectedFilters.selectedShifter : 'Shifter'}</div>
                            <div className={`menu transition ${this.props.filterDropdowns.shiftersOpen ? 'visible' : 'hidden'}`}>
                                <div key="Manual" className={`item ${this.props.selectedFilters.selectedShifter === 'Manual' ? 'active selected' : ''}`} data-value="Manual" onClick={() => this.props.selectShifter('Manual')} >Manual</div>
                                <div key="Paddle Shifter" className={`item ${this.props.selectedFilters.selectedShifter === 'Paddle Shifter' ? 'active selected' : ''}`} data-value="Paddle Shifter" onClick={() => this.props.selectShifter('Paddle Shifter')} >Paddle Shifter</div>
                                <div key="Sequential" className={`item ${this.props.selectedFilters.selectedShifter === 'Sequential' ? 'active selected' : ''}`} data-value="Sequential" onClick={() => this.props.selectShifter('Sequential')} >Sequential</div>
                            </div>
                        </div>
                    </div>

                    <div className="three wide field">
                        <label>Class</label>
                        <div className={`ui selection dropdown ${this.props.filterDropdowns.classOpen ? 'active visible' : ''}`} onClick={() => this.props.openClass(!this.props.filterDropdowns.classOpen)}>
                            <input type="hidden" name="class"/>
                            <i className="dropdown icon"></i>
                            <div className={`${this.props.selectedFilters.selectedClass ? '' : 'default'} text`}>{this.props.selectedFilters.selectedClass ? this.props.selectedFilters.selectedClass : 'Class'}</div>
                            <div className={`menu transition ${this.props.filterDropdowns.classOpen ? 'visible' : 'hidden'}`}>
                                <div key="Road" className={`item ${this.props.selectedFilters.selectedClass === 'Road' ? 'active selected' : ''}`} data-value="Road" onClick={() => this.props.selectClass('Road')} >Road</div>
                                <div key="Race" className={`item ${this.props.selectedFilters.selectedClass === 'Race' ? 'active selected' : ''}`} data-value="Race" onClick={() => this.props.selectClass('Race')} >Race</div>
                                <div key="Prototype" className={`item ${this.props.selectedFilters.selectedClass === 'Prototype' ? 'active selected' : ''}`} data-value="Prototype" onClick={() => this.props.selectClass('Prototype')} >Prototype</div>
                                <div key="Open Wheel" className={`item ${this.props.selectedFilters.selectedClass === 'Open Wheel' ? 'active selected' : ''}`} data-value="Open Wheel" onClick={() => this.props.selectClass('Open Wheel')} >Open Wheel</div>
                            </div>
                        </div>
                    </div>

                    <Link to="/list" className="ui button" >Search</Link>

                </div>
                </div>
                <div className="filter-pages">
                    <div className="ui grid">

                        <FilterCard link="/list" labelText="All Cars" imgSrc="./img/home/allCars.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/brands" labelText="Brands" imgSrc="./img/home/brands.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/class" labelText="Classes" imgSrc="./img/home/classes.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/decades" labelText="Decades" imgSrc="./img/home/decades.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/shifters" labelText="Shifters" imgSrc="./img/home/shifter.jpg" onClick={() => this.props.resetFilters()} />

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { filterDropdowns: state.filterDropdowns, selectedFilters: state.selectedFilters, brands: Object.values(state.brands) }
}

export default connect(mapStateToProps, { openBrands, openClass, openDecades, openShifters, fetchBrands, selectBrand, selectClass, selectDecade, selectShifter, resetFilters })(Home);