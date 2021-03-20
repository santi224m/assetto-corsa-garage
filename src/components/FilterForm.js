import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { renderBrandsOptions, renderClassOptions, renderDecadesOptions, renderShifterOptions } from '../modules/renderDropdownOptions';

import Dropdown from './dropdown/Dropdown';
import SortDropdown from './dropdown/SortDropdown';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);

        if (window.innerWidth > 767) {
            this.state = { showFilters: true };
        } else {
            this.state = { showFilters: false };
        }
    }

    componentDidMount() {
        if (this.props.brands.length === 0) {
            this.props.fetchBrands();
        }
    }

    componentWillUnmount() {
        // Reset values of selected filters
        this.props.resetFilters();
    }

    renderShowFiltersLink() {
        if (this.state.showFilters) {
            return (
                <>
                    Hide Filters <i className='angle up icon'></i>
                </>
            );
        } else {
            return (
                <>
                    Show Filters<i className='angle down icon'></i>
                </>
            );
        }
    }

    handleResetButton(props) {
        props.resetFilters();
        props.selectSort('nameDown');
    }

    render() {
        return (
            <>
                <div className='showList'>
                    <a onClick={() => this.setState({ showFilters: !this.state.showFilters })}>{this.renderShowFiltersLink()}</a>
                </div>
                <div className={`ui form transition ${this.state.showFilters ? 'visible' : 'hidden'}`}>
                    <div className='fields'>
                        <div className='field'>
                            <Dropdown inputName='Brand' selectedValue={this.props.selectedFilters.selectedBrand}>
                                {renderBrandsOptions(this.props)}
                            </Dropdown>
                        </div>

                        <div className='field'>
                            <Dropdown inputName='Class' selectedValue={this.props.selectedFilters.selectedClass}>
                                {renderClassOptions(this.props)}
                            </Dropdown>
                        </div>

                        <div className='field'>
                            <Dropdown inputName='Decade' selectedValue={this.props.selectedFilters.selectedDecade}>
                                {renderDecadesOptions(this.props)}
                            </Dropdown>
                        </div>

                        <div className='field'>
                            <Dropdown inputName='Shifter' selectedValue={this.props.selectedFilters.selectedShifter}>
                                {renderShifterOptions(this.props)}
                            </Dropdown>
                        </div>

                        <div className='field'>
                            <button className={`ui button red`} onClick={() => this.handleResetButton(this.props)}>
                                Reset Filters
                            </button>
                        </div>
                    </div>
                    <SortDropdown />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { brands: Object.values(state.brands), selectedFilters: state.selectedFilters };
};

export default connect(mapStateToProps, actions)(FilterForm);
