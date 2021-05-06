import React from 'react';

class Footer extends React.Component {
  scrollTop() {
    window.scrollTo(0, 0);
  }

  animatedScrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div id='footer'>
        <div className='container'>
          <img src='/img/asg-logo.png' alt='Assetto Corsa Garage' id='asg-logo' />
          <p className='copy'>&copy; Assetto Corsa Garage 2021</p>
          <div className='right'>
            <a href='https://github.com/santi224m/assettoCorsaGarage'>
              <img src='/img/icons/github.svg' alt='GitHub' />
            </a>
            <img
              className='btn-scroll'
              src='/img/icons/scroll-up.svg'
              alt='Scroll Up'
              onClick={() => this.animatedScrollTop()}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
