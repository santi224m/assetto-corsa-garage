import React from 'react';
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

import Dropdown from './Dropdown';

class FilterForm extends React.Component {

    constructor(props) {
        super(props);
        // Create refs for dropdowns
        this.brandsRef = React.createRef();
        this.classRef = React.createRef();
        this.decadesRef = React.createRef();
        this.shiftersRef = React.createRef();
        this.onDropdownClickBrands = this.onDropdownClickBrands.bind(this);
        this.onDropdownClickClass = this.onDropdownClickClass.bind(this);
        this.onDropdownClickDecades = this.onDropdownClickDecades.bind(this);
        this.onDropdownClickShifter = this.onDropdownClickShifter.bind(this);
    }

    componentDidMount() {
        if(this.props.brands.length === 0) {
            this.props.fetchBrands();
        }

        // Add event listeners to dropdowns so that they close when user clicks window
        document.body.addEventListener('click', this.onDropdownClickBrands, false);
        document.body.addEventListener('click', this.onDropdownClickClass, false);
        document.body.addEventListener('click', this.onDropdownClickDecades, false);
        document.body.addEventListener('click', this.onDropdownClickShifter, false);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.onDropdownClickBrands, false);
        document.body.removeEventListener('click', this.onDropdownClickClass, false);
        document.body.removeEventListener('click', this.onDropdownClickDecades, false);
        document.body.removeEventListener('click', this.onDropdownClickShifter, false);
        this.props.resetFilters()
    }

    // Functions to check whether user clicked dropdown or window
    onDropdownClickBrands(e) {
        if(this.brandsRef.current && this.brandsRef.current.contains(e.target)) {
            return;
        }

        this.props.openBrands(false);
    }

    onDropdownClickClass(e) {
        if(this.classRef.current && this.classRef.current.contains(e.target)) {
            return;
        }

        this.props.openClass(false);
    }

    onDropdownClickDecades(e) {
        if(this.decadesRef.current && this.decadesRef.current.contains(e.target)) {
            return;
        }

        this.props.openDecades(false);
    }


    onDropdownClickShifter(e) {
        if(this.shiftersRef.current && this.shiftersRef.current.contains(e.target)) {
            return;
        }

        this.props.openShifters(false);
    }

    // Render options for dropdowns
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

    renderClassOptions() {
        return (
            <>
                <div key="Road" className={`item ${this.props.selectedFilters.selectedClass === 'Road' ? 'active selected' : ''}`} data-value="Road" onClick={() => this.props.selectClass('Road')} >Road</div>
                <div key="Race" className={`item ${this.props.selectedFilters.selectedClass === 'Race' ? 'active selected' : ''}`} data-value="Race" onClick={() => this.props.selectClass('Race')} >Race</div>
                <div key="Prototype" className={`item ${this.props.selectedFilters.selectedClass === 'Prototype' ? 'active selected' : ''}`} data-value="Prototype" onClick={() => this.props.selectClass('Prototype')} >Prototype</div>
                <div key="Open Wheel" className={`item ${this.props.selectedFilters.selectedClass === 'Open Wheel' ? 'active selected' : ''}`} data-value="Open Wheel" onClick={() => this.props.selectClass('Open Wheel')} >Open Wheel</div>
            </>
        );
    }

    renderDecadesOptions() {
        return (
            <>
                <div key="1950s" className={`item ${this.props.selectedFilters.selectedDecade === '1950s' ? 'active selected' : ''}`} data-value="1950s" onClick={() => this.props.selectDecade(1950)} >1950s</div>
                <div key="1960s" className={`item ${this.props.selectedFilters.selectedDecade === '1960s' ? 'active selected' : ''}`} data-value="1960s" onClick={() => this.props.selectDecade(1960)} >1960s</div>
                <div key="1970s" className={`item ${this.props.selectedFilters.selectedDecade === '1970s' ? 'active selected' : ''}`} data-value="1970s" onClick={() => this.props.selectDecade(1970)} >1970s</div>
                <div key="1980s" className={`item ${this.props.selectedFilters.selectedDecade === '1980s' ? 'active selected' : ''}`} data-value="1980s" onClick={() => this.props.selectDecade(1980)} >1980s</div>
                <div key="1990s" className={`item ${this.props.selectedFilters.selectedDecade === '1990s' ? 'active selected' : ''}`} data-value="1990s" onClick={() => this.props.selectDecade(1990)} >1990s</div>
                <div key="2000s" className={`item ${this.props.selectedFilters.selectedDecade === '2000s' ? 'active selected' : ''}`} data-value="2000s" onClick={() => this.props.selectDecade(2000)} >2000s</div>
                <div key="2010s" className={`item ${this.props.selectedFilters.selectedDecade === '2010s' ? 'active selected' : ''}`} data-value="2010s" onClick={() => this.props.selectDecade(2010)} >2010s</div>
            </>
        );
    }

    renderShifterOptions() {
        return (
            <>
                <div key="Manual" className={`item ${this.props.selectedFilters.selectedShifter === 'Manual' ? 'active selected' : ''}`} data-value="Manual" onClick={() => this.props.selectShifter('Manual')} >Manual</div>
                <div key="Paddle Shifter" className={`item ${this.props.selectedFilters.selectedShifter === 'Paddle Shifter' ? 'active selected' : ''}`} data-value="Paddle Shifter" onClick={() => this.props.selectShifter('Paddle Shifter')} >Paddle Shifter</div>
                <div key="Sequential" className={`item ${this.props.selectedFilters.selectedShifter === 'Sequential' ? 'active selected' : ''}`} data-value="Sequential" onClick={() => this.props.selectShifter('Sequential')} >Sequential</div>
            </>
        );
    }

    render() {
        return (
            <div className="ui form">
                <div className="fields">

                    <div ref={this.brandsRef} className="field">
                        <Dropdown 
                            // ref={this.brandsRef}
                            isDropdownOpen={this.props.filterDropdowns.brandsOpen} 
                            onClick={() => this.props.openBrands(!this.props.filterDropdowns.brandsOpen)}
                            inputName="Brand"
                            selectedValue={this.props.selectedFilters.selectedBrand}
                        >
                            {this.renderBrandsList()}
                        </Dropdown>
                    </div>

                    <div ref={this.classRef} className="field">
                        <Dropdown
                            isDropdownOpen={this.props.filterDropdowns.classOpen}
                            onClick={() => this.props.openClass(!this.props.filterDropdowns.classOpen)}
                            inputName="Class"
                            selectedValue={this.props.selectedFilters.selectedClass}
                        >
                            {this.renderClassOptions()}
                        </Dropdown>
                    </div>

                    <div ref={this.decadesRef} className="field">
                        <Dropdown
                            isDropdownOpen={this.props.filterDropdowns.decadesOpen}
                            onClick={() => this.props.openDecades(!this.props.filterDropdowns.decadesOpen)}
                            inputName="Decade"
                            selectedValue={this.props.selectedFilters.selectedDecade}
                        >
                            {this.renderDecadesOptions()}
                        </Dropdown>
                    </div>

                    <div ref={this.shiftersRef} className="field">
                        <Dropdown
                            isDropdownOpen={this.props.filterDropdowns.shiftersOpen}
                            onClick={() => this.props.openShifters(!this.props.filterDropdowns.shiftersOpen)}
                            inputName="Shifter"
                            selectedValue={this.props.selectedFilters.selectedShifter}
                        >
                            {this.renderShifterOptions()}
                        </Dropdown>
                    </div>

                    <div className="field">
                        <button className={`ui button red`} onClick={() => this.props.resetFilters()}>Reset Filters</button>
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