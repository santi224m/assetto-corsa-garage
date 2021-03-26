import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage, updateStartIndex, updateEndIndex } from '../actions';

class Pagination extends React.Component {
    componentDidUpdate() {
        if (this.props.pagination.currentPage === 1 && this.props.pagination.startIndex !== 0) {
            this.updatePage(1);
        }
    }

    renderNumbers() {
        // Turning the page number into an array so that I can map over it
        const pageArr = [];

        for (let i = 0; i < this.props.pagination.pages; i++) {
            pageArr.push(i + 1);
        }

        return pageArr.map(num => {
            return (
                <a key={num} onClick={() => this.updatePage(num)} className={`item ${this.props.pagination.currentPage === num ? 'active' : ''}`}>
                    {num}
                </a>
            );
        });
    }

    updatePage(newCurrentPage) {
        this.props.updateCurrentPage(newCurrentPage);

        // Update start and end indexes to redux state
        const newStartIndex = (newCurrentPage - 1) * this.props.pagination.pageSize;
        this.props.updateStartIndex(newStartIndex);
        let newEndIndex = Math.min(newStartIndex + this.props.pagination.pageSize - 1, this.props.pagination.totalItems - 1);
        this.props.updateEndIndex(newEndIndex < this.props.pagination.pageSize - 1 ? this.props.pagination.pageSize : newEndIndex);
        window.scrollTo(0, 0);
    }

    renderPreviousButtons() {
        if (this.props.pagination.currentPage === 1) {
            return <button className='ui button green btn-disabled'>Previous</button>;
        }

        return (
            <button className='ui button green' onClick={() => this.updatePage(this.props.pagination.currentPage - 1)}>
                Previous
            </button>
        );
    }

    renderNextButtons() {
        if (this.props.pagination.currentPage === this.props.pagination.pages) {
            return <button className='ui button green btn-disabled'>Next</button>;
        }

        return (
            <button className='ui button green' onClick={() => this.updatePage(this.props.pagination.currentPage + 1)}>
                Next
            </button>
        );
    }

    render() {
        if (this.props.pagination.pages === 1 || this.props.pagination.pages === 0) {
            return <div></div>;
        }

        return (
            <div className='pagination-container'>
                <div className='ui pagination menu'>
                    {this.renderPreviousButtons()}
                    {this.renderNumbers()}
                    {this.renderNextButtons()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { pagination: state.pagination };
};

export default connect(mapStateToProps, {
    updateCurrentPage,
    updateStartIndex,
    updateEndIndex,
})(Pagination);
