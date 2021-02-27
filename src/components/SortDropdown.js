import React from 'react';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import { selectSort, openSort, updateCurrentPage } from '../actions';

class SortDropdown extends React.Component {
    constructor(props) {
        super(props);
        // Create refs for dropdown
        this.sortRef = React.createRef();
        this.onSortDropdownClick = this.onSortDropdownClick.bind(this);
        this.selectedOptionName = '';
    }

    componentDidMount() {
        document.body.addEventListener('click', this.onSortDropdownClick, false);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.onSortDropdownClick, false);
    }

    // Closedropdown when user clicks window
    onSortDropdownClick(e) {
        if(this.sortRef.current && this.sortRef.current.contains(e.target)) {
            return;
        }

        this.props.openSort(false);
    }

    // Show selected option on dropdown
    renderSortName() {
        if(this.props.currentSort.sortName === 'nameDown') {
            return 'Brand Name ↓'
        } else if(this.props.currentSort.sortName === 'nameUp') {
            return 'Brand Name ↑'
        } else if(this.props.currentSort.sortName === 'yearNew') {
            return 'Year: Newest'
        } else if(this.props.currentSort.sortName === 'yearOld') {
            return 'Year: Oldest'
        } else if(this.props.currentSort.sortName === 'dateAddedNew') {
            return 'Date Added: Newest'
        } else if(this.props.currentSort.sortName === 'dateAddedOld') {
            return 'Date Added: Oldest'
        }
    }

    // Update selected sort option
    onSelectedUpdate(newOption) {
        this.props.selectSort(newOption);
        this.props.updateCurrentPage(1);
        window.scrollTo(0, 0);
    }

    renderDropdownOptions() {
        return (
            <>
                <div key="NameDown" className={`item ${this.props.currentSort.sortName === 'nameDown' ? 'active selected' : ''}`} data-value="nameDown" onClick={() => this.onSelectedUpdate('nameDown')} >Brand Name ↓</div>
                <div key="NameUp" className={`item ${this.props.currentSort.sortName === 'nameUp' ? 'active selected' : ''}`} data-value="nameUp" onClick={() => this.onSelectedUpdate('nameUp')} >Brand Name ↑</div>
                <div key="YearNew" className={`item ${this.props.currentSort.sortName === 'yearNew' ? 'active selected' : ''}`} data-value="yearNew" onClick={() => this.onSelectedUpdate('yearNew')} >Year: Newest</div>
                <div key="YearOld" className={`item ${this.props.currentSort.sortName === 'yearOld' ? 'active selected' : ''}`} data-value="yearOld" onClick={() => this.onSelectedUpdate('yearOld')} >Year: Oldest</div>
                <div key="DateAddedNew" className={`item ${this.props.currentSort.sortName === 'dateAddedNew' ? 'active selected' : ''}`} data-value="dateAddedNew" onClick={() => this.onSelectedUpdate('dateAddedNew')} >Date Added: Newest</div>
                <div key="DateAddedOld" className={`item ${this.props.currentSort.sortName === 'dateAddedOld' ? 'active selected' : ''}`} data-value="dateAddedOld" onClick={() => this.onSelectedUpdate('dateAddedOld')} >Date Added: Oldest</div>
            </>
        );
    }

    render() {
        this.selectedOptionName = this.renderSortName();
        return (
            <div ref={this.sortRef} className="ui form sort-dropdown">
                <Dropdown
                    isDropdownOpen={this.props.filterDropdowns.sortOpen}
                    onClick={() => this.props.openSort(!this.props.filterDropdowns.sortOpen)}
                    inputName="Sort"
                    selectedValue={this.selectedOptionName}
                >
                {this.renderDropdownOptions()}
                </Dropdown>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { currentSort: state.currentSort, filterDropdowns: state.filterDropdowns };
}

export default connect(mapStateToProps, { selectSort, openSort, updateCurrentPage })(SortDropdown);

