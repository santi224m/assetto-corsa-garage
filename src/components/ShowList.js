import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Helmet } from 'react-helmet';

import FilterForm from './FilterForm';
import SortDropdown from './dropdown/SortDropdown';
import CarsList from './CarsList';
import SearchErrorMessage from './SeachErrorMessage';
import Pagination from './Pagination';

const ShowList = props => {
  const [totalItems, updateTotalItems] = useState(0);
  const [currentPage, updateCurrentPage] = useState(1);
  const [pageSize, updatePageSize] = useState(12);
  const [startIndex, updateStartIndex] = useState(0);
  const [endIndex, updateEndIndex] = useState(11);
  const [pages, updatePages] = useState(1);

  useEffect(() => {
    if (props.cars.length === 0) {
      props.fetchCars();
    }

    window.scrollTo(0, 0);

    return () => {
      updateCurrentPage(1);
      updateStartIndex(0);
      updateEndIndex(11);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Assetto Corsa Garage | Cars</title>
      </Helmet>
      <div className='carsList-grid'>
        <div className='container'>
          <FilterForm />
          <SortDropdown />
          <CarsList
            props={props}
            totalItems={totalItems}
            updateTotalItems={updateTotalItems}
            updatePages={updatePages}
            pageSize={pageSize}
            updateCurrentPage={updateCurrentPage}
            startIndex={startIndex}
            endIndex={endIndex}
          />
          <SearchErrorMessage carListLength={totalItems} />
          <Pagination
            totalItems={totalItems}
            updateTotalItems={updateTotalItems}
            currentPage={currentPage}
            updateCurrentPage={updateCurrentPage}
            pageSize={pageSize}
            updatePageSize={updatePageSize}
            startIndex={startIndex}
            updateStartIndex={updateStartIndex}
            endIndex={endIndex}
            updateEndIndex={updateEndIndex}
            pages={pages}
            updatePages={updatePages}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cars: Object.values(state.cars),
    brands: Object.values(state.brands),
    selectedFilters: state.selectedFilters,
    sortName: state.currentSort.sortName
  };
};

export default connect(mapStateToProps, actions)(ShowList);
