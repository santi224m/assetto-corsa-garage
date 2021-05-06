import React from 'react';
import { Link } from 'react-router-dom';

class FilterCard extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className='filter-card' onClick={() => this.props.onClick()}>
        <div className='ribbon-label'>{this.props.labelText}</div>
        <img src={this.props.imgSrc} alt='' />
      </Link>
    );
  }
}

export default FilterCard;
