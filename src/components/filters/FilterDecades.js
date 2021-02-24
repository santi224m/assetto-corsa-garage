import React from 'react';
import { connect } from 'react-redux';
import { selectDecade } from '../../actions';
import FilterCard from '../FilterCard';

class FilterDecades extends React.Component {
    render() {
        return (
            <div className="ui grid">
                <FilterCard link="/list" labelText="1950s" imgSrc="../img/decades/1950s.jpg" onClick={() => this.props.selectDecade(1950)} />
                <FilterCard link="/list" labelText="1960s" imgSrc="../img/decades/1960s.jpg" onClick={() => this.props.selectDecade(1960)} />
                <FilterCard link="/list" labelText="1970s" imgSrc="../img/decades/1970s.jpg" onClick={() => this.props.selectDecade(1970)} />
                <FilterCard link="/list" labelText="1990s" imgSrc="../img/decades/1990s.jpg" onClick={() => this.props.selectDecade(1990)} />
                <FilterCard link="/list" labelText="2000s" imgSrc="../img/decades/2000s.jpg" onClick={() => this.props.selectDecade(2000)} />
                <FilterCard link="/list" labelText="2010s" imgSrc="../img/decades/2010s.jpg" onClick={() => this.props.selectDecade(2010)} />
            </div>
        );
    }
}

export default connect(null, { selectDecade })(FilterDecades);