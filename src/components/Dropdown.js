import React from 'react';

class Dropdown extends React.Component {
    render() {
        return (
            <div ref={this.props.ref} className={`ui selection dropdown ${this.props.isDropdownOpen ? 'active visible' : ''}`} onClick={this.props.onClick}>
                <input type="hidden" name={this.props.inputName}/>
                <i className="dropdown icon"></i>
                <div className={`${this.props.selectedValue ? '' : 'default'} text`}>{this.props.selectedValue ? this.props.selectedValue : this.props.inputName}</div>
                <div className={`menu transition ${this.props.isDropdownOpen ? 'visible' : 'hidden'}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Dropdown;