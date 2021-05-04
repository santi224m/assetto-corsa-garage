import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import { Helmet } from 'react-helmet';

import ModsList from './ModsList';
import BannerWithButton from '../BannerWithButton';
import Pagination from '../Pagination';

const NewMod = props => {
  const [totalItems, updateTotalItems] = useState(0);
  const [currentPage, updateCurrentPage] = useState(1);
  const [pageSize, updatePageSize] = useState(12);
  const [startIndex, updateStartIndex] = useState(0);
  const [endIndex, updateEndIndex] = useState(11);
  const [pages, updatePages] = useState(1);

  useEffect(() => {
    if (props.isSignedIn === false) {
      history.push('/');
    }
  }, [props.isSignedIn]);

  return (
    <>
      <Helmet>
        <title>Assetto Corsa Garage | Add Mod</title>
      </Helmet>
      <div>
        <BannerWithButton />
        <div className='ui container new-mod-page'>
          <ModsList
            totalItems={totalItems}
            updateTotalItems={updateTotalItems}
            updatePages={updatePages}
            pageSize={pageSize}
            updateCurrentPage={updateCurrentPage}
            startIndex={startIndex}
            endIndex={endIndex}
          />
          {pages > 1 && (
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
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return { isSignedIn: state.oAuth.isSignedIn };
};

export default connect(mapStateToProps)(NewMod);
