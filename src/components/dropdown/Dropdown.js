import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDropdownOpen: false };
    this.onDropdownClick = this.onDropdownClick.bind(this);
  }

  componentDidMount() {
    this.dropdownRef = React.createRef();
    document.body.addEventListener('click', this.onDropdownClick, false);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onDropdownClick, false);
  }

  // Checks whether user clicked dropdown or window
  onDropdownClick(e) {
    if (this.dropdownRef.current && this.dropdownRef.current.contains(e.target)) {
      return;
    }

    this.setState({ isDropdownOpen: false });
  }

  render() {
    return (
      <div
        style={{ position: 'relative' }}
        ref={this.dropdownRef}
        className={`ui selection dropdown ${this.state.isDropdownOpen ? 'active visible' : ''}`}
        onClick={() => this.setState({ isDropdownOpen: !this.state.isDropdownOpen })}
      >
        <input type='hidden' name={this.props.inputName} />
        <img
          src='/img/icons/DownArrow.svg'
          className='asg-icon down-arrow'
          style={{ position: 'absolute', right: '20px', top: '45%' }}
        />
        <div className={`${this.props.selectedValue ? '' : 'default'} text`}>
          {this.props.selectedValue ? this.props.selectedValue : this.props.inputName}
        </div>
        <div className={`menu transition ${this.state.isDropdownOpen ? 'visible' : 'hidden'}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Dropdown;
