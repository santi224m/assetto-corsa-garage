import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class FilterCard extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className='five wide column' onClick={() => this.props.onClick()}>
        <div className='column'>
          <div className='ui fluid image'>
            <div className='ui green ribbon label'>{this.props.labelText}</div>
            <img src={this.props.imgSrc} alt='' />
          </div>
        </div>
      </Link>
    );
  }
}

export default connect(null)(FilterCard);
