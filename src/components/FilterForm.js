import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchBrands,
        openBrands,
        openClass,
        openDecades,
        openShifters,
        selectBrand,
        selectClass,
        selectDecade,
        selectShifter,
        resetFilters } from '../actions';

class FilterForm extends React.Component {

    constructor(props) {
        super(props);
        this.brandsRef = React.createRef();
        this.classRef = React.createRef();
        this.decadesRef = React.createRef();
        this.shiftersRef = React.createRef();
        this.onDropdownClick = this.onDropdownClick.bind(this);
    }

    componentDidMount() {
        if(this.props.brands.length === 0) {
            this.props.fetchBrands();
        }

        document.body.addEventListener('click', this.onDropdownClick, false);
    }

    onDropdownClick(e) {
        if(this.brandsRef.current && this.brandsRef.current.contains(e.target)) {
            return;
        }

        if(this.classRef.current && this.classRef.current.contains(e.target)) {
            return;
        }

        if(this.decadesRef.current && this.decadesRef.current.contains(e.target)) {
            return;
        }

        if(this.shiftersRef.current && this.shiftersRef.current.contains(e.target)) {
            return;
        }

        this.props.openBrands(false);
        this.props.openClass(false);
        this.props.openDecades(false);
        this.props.openShifters(false);
    }


    componentWillUnmount() {
        document.body.removeEventListener('click', this.onDropdownClick, false);
        this.props.resetFilters()
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
            <div className="ui form">
                <div className="fields">

                    <div className="field">
                        <div ref={this.brandsRef} className={`ui selection dropdown ${this.props.filterDropdowns.brandsOpen ? 'active visible' : ''}`} onClick={() => this.props.openBrands(!this.props.filterDropdowns.brandsOpen)}>
                            <input type="hidden" name="brand"/>
                            <i className="dropdown icon"></i>
                            <div className={`${this.props.selectedFilters.selectedBrand ? '' : 'default'} text`}>{this.props.selectedFilters.selectedBrand ? this.props.selectedFilters.selectedBrand : 'Brand'}</div>
                            <div className={`menu transition ${this.props.filterDropdowns.brandsOpen ? 'visible' : 'hidden'}`}>
                                {this.renderBrandsList()}
                            </div>
                        </div>
                    </div>
                    
                    <div className="field">
                        <div ref={this.classRef} className={`ui selection dropdown ${this.props.filterDropdowns.classOpen ? 'active visible' : ''}`} onClick={() => this.props.openClass(!this.props.filterDropdowns.classOpen)}>
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

                    <div className="field">
                        <div ref={this.decadesRef} className={`ui selection dropdown ${this.props.filterDropdowns.decadesOpen ? 'active visible' : ''}`} onClick={() => this.props.openDecades(!this.props.filterDropdowns.decadesOpen)}>
                            <input type="hidden" name="decade"/>
                            <i className="dropdown icon"></i>
                            <div className={`${this.props.selectedFilters.selectedDecade ? '' : 'default'} text`}>{this.props.selectedFilters.selectedDecade ? this.props.selectedFilters.selectedDecade : 'Decade'}</div>
                            <div className={`menu transition ${this.props.filterDropdowns.decadesOpen ? 'visible' : 'hidden'}`}>
                                <div key="1950s" className={`item ${this.props.selectedFilters.selectedDecade === '1950s' ? 'active selected' : ''}`} data-value="1950s" onClick={() => this.props.selectDecade(1950)} >1950s</div>
                                <div key="1960s" className={`item ${this.props.selectedFilters.selectedDecade === '1960s' ? 'active selected' : ''}`} data-value="1960s" onClick={() => this.props.selectDecade(1960)} >1960s</div>
                                <div key="1970s" className={`item ${this.props.selectedFilters.selectedDecade === '1970s' ? 'active selected' : ''}`} data-value="1970s" onClick={() => this.props.selectDecade(1970)} >1970s</div>
                                <div key="1980s" className={`item ${this.props.selectedFilters.selectedDecade === '1980s' ? 'active selected' : ''}`} data-value="1980s" onClick={() => this.props.selectDecade(1980)} >1980s</div>
                                <div key="1990s" className={`item ${this.props.selectedFilters.selectedDecade === '1990s' ? 'active selected' : ''}`} data-value="1990s" onClick={() => this.props.selectDecade(1990)} >1990s</div>
                                <div key="2000s" className={`item ${this.props.selectedFilters.selectedDecade === '2000s' ? 'active selected' : ''}`} data-value="2000s" onClick={() => this.props.selectDecade(2000)} >2000s</div>
                                <div key="2010s" className={`item ${this.props.selectedFilters.selectedDecade === '2010s' ? 'active selected' : ''}`} data-value="2010s" onClick={() => this.props.selectDecade(2010)} >2010s</div>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <div ref={this.shiftersRef} className={`ui selection dropdown ${this.props.filterDropdowns.shiftersOpen ? 'active visible' : ''}`} onClick={() => this.props.openShifters(!this.props.filterDropdowns.shiftersOpen)}>
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

                    <div className="field">
                        <button className={`ui button`} onClick={() => this.props.resetFilters()}>Reset Filters</button>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { filterDropdowns: state.filterDropdowns, brands: Object.values(state.brands), selectedFilters: state.selectedFilters };
}

export default connect(mapStateToProps, { fetchBrands, openBrands, openClass, openDecades, openShifters, selectBrand, selectClass, selectDecade, selectShifter, resetFilters })(FilterForm);