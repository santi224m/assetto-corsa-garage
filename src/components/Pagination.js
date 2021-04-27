import React from 'react';

class Pagination extends React.Component {
    componentDidUpdate() {
        if (this.props.currentPage === 1 && this.props.startIndex !== 0) {
            this.updatePage(1);
        }
    }

    renderNumbers() {
        // Turning the page number into an array so that I can map over it
        const pageArr = [];

        for (let i = 0; i < this.props.pages; i++) {
            pageArr.push(i + 1);
        }

        return pageArr.map(num => {
            return (
                <a
                    key={num}
                    onClick={() => this.updatePage(num)}
                    className={`item ${
                        this.props.currentPage === num ? 'active' : ''
                    }`}
                >
                    {num}
                </a>
            );
        });
    }

    updatePage(newCurrentPage) {
        this.props.updateCurrentPage(newCurrentPage);

        const newStartIndex = (newCurrentPage - 1) * this.props.pageSize;
        this.props.updateStartIndex(newStartIndex);
        let newEndIndex = Math.min(
            newStartIndex + this.props.pageSize - 1,
            this.props.totalItems - 1
        );
        this.props.updateEndIndex(
            newEndIndex < this.props.pageSize - 1
                ? this.props.pageSize
                : newEndIndex
        );
        window.scrollTo(0, 0);
    }

    renderPreviousButtons() {
        if (this.props.currentPage === 1) {
            return (
                <button className='ui button green btn-disabled'>
                    Previous
                </button>
            );
        }

        return (
            <button
                className='ui button green'
                onClick={() => this.updatePage(this.props.currentPage - 1)}
            >
                Previous
            </button>
        );
    }

    renderNextButtons() {
        if (this.props.currentPage === this.props.pages) {
            return (
                <button className='ui button green btn-disabled'>Next</button>
            );
        }

        return (
            <button
                className='ui button green'
                onClick={() => this.updatePage(this.props.currentPage + 1)}
            >
                Next
            </button>
        );
    }

    render() {
        if (this.props.pages === 1 || this.props.pages === 0) {
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

export default Pagination;
