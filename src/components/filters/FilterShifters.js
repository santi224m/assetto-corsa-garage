import React from 'react';
import { connect } from 'react-redux';
import { selectShifter } from '../../actions';
import FilterCard from '../FilterCard';
import { Helmet } from 'react-helmet';

class FilterShifters extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Assetto Corsa Garage | Shifters</title>
          <meta name='description' content='Filter Assetto Corsa mods by transmsision' />
        </Helmet>
        <div className='filter-page'>
          <div className='container'>
            <p className='filter-title'>Filter by Transmission Type</p>
            <div className='cards-grid'>
              <FilterCard
                link='/list'
                labelText='Manual'
                imgSrc='../img/shifters/hPattern.jpg'
                onClick={() => this.props.selectShifter('Manual')}
              />
              <FilterCard
                link='/list'
                labelText='Paddle Shifter'
                imgSrc='../img/shifters/paddleShifter.jpg'
                onClick={() => this.props.selectShifter('Paddle Shifter')}
              />
              <FilterCard
                link='/list'
                labelText='Sequential'
                imgSrc='../img/shifters/sequential.jpg'
                onClick={() => this.props.selectShifter('Sequential')}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { selectShifter })(FilterShifters);
