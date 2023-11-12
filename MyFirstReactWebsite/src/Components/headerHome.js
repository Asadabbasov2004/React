import React from 'react';
import SlideShow from './Slide';
const Header = () => {
    return (
       <section id='Header'>
         <div >
          <div className='header-slide col-12'>
          <SlideShow/>
          </div>
       </div>
       </section>
    );
}

export default Header;
