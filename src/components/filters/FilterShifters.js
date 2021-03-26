import React from 'react';
import { connect } from 'react-redux';
import { selectShifter } from '../../actions';
import FilterCard from '../FilterCard';

class FilterShifters extends React.Component {
    render() {
        return (
            <div className='filter-page shifter-filter-page'>
                <p className='filter-title'>Filter by Transmission Type</p>
                <div className='ui grid'>
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
        );
    }
}

export default connect(null, { selectShifter })(FilterShifters);
