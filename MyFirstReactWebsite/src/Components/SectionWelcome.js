import React from 'react';
import { Link } from 'react-router-dom';
import imagehome1 from '../Assets/Image/Home-image/Home1.jpg';
const SectionWelcome = () => {
    return (
        <section id='sectionWelcome'>
           <div className='sectionWelcome ' >
           <div className='container row  m-auto justify-content-between py-5'>
           <div className='rightSectionWelcome col-6'>
                <span className='title-span'>
                    Italian Resturant</span>
                <h3>
                    Welcome</h3>
                <p>
                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                <Link className='' to='/about' >our story</Link>
            </div>
            <div className='leftSectionWelcome col-6'>
                <img src={imagehome1} alt=''/>
            </div>
           </div>
        </div>
        </section>
    );
}

export default SectionWelcome;
