import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HomeDropdown from './HomeDropdown';

import FilterCard from './FilterCard';

class Home extends React.Component {
    render() {
        return (
        <div>
            <div className="hero">
                <div className="text">Find the best<br/>mods for you</div>
                <HomeDropdown />
                </div>
                <div className="filter-pages">
                    <div className="ui grid">

                        <FilterCard link="/list" labelText="All Cars" imgSrc="./img/home/allCars.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/brands" labelText="Brands" imgSrc="./img/home/brands.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/class" labelText="Classes" imgSrc="./img/home/classes.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/decades" labelText="Decades" imgSrc="./img/home/decades.jpg" onClick={() => this.props.resetFilters()} />
                        <FilterCard link="/filters/shifters" labelText="Shifters" imgSrc="./img/home/shifter.jpg" onClick={() => this.props.resetFilters()} />

                    </div>
                </div>
            </div>
        );
    }
}



export default connect(null)(Home);