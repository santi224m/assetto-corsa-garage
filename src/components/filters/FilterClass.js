import React from 'react';
import { connect } from 'react-redux';
import { selectClass } from '../../actions';
import FilterCard from '../FilterCard';

class FilterClass extends React.Component {
    render() {
        return (
            <div className='filter-page car-class-filters-page'>
                <p className='filter-title'>Filter by Car Class</p>
                <div className='ui grid'>
                    <FilterCard link='/list' labelText='Road' imgSrc='../img/classes/street.jpg' onClick={() => this.props.selectClass('Road')} />
                    <FilterCard link='/list' labelText='Race' imgSrc='../img/classes/track.jpg' onClick={() => this.props.selectClass('Race')} />
                    <FilterCard
                        link='/list'
                        labelText='Prototype'
                        imgSrc='../img/classes/prototype.jpg'
                        onClick={() => this.props.selectClass('Prototype')}
                    />
                    <FilterCard
                        link='/list'
                        labelText='Open Wheel'
                        imgSrc='../img/classes/openWheeler.jpg'
                        onClick={() => this.props.selectClass('Open Wheel')}
                    />
                </div>
            </div>
        );
    }
}

export default connect(null, { selectClass })(FilterClass);
