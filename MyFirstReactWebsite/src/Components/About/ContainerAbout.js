import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../Assets/Image/Home-image/Home1.jpg';
import image2 from '../../Assets/Image/Home-image/Home2.jpg';
const ContainerAbout = () => {
    return (
    <section className='container-About '>
     <div className='sectionWelcome '>
            <div className='rightSectionWelcome col-md-6 '>
                <span className='title-span'>
                Delicious</span>
                <h3>
                RECIPES</h3>
                <p>
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                <Link className='' to='/about' >our story</Link>
            </div>
            <div className='leftSectionWelcome col-md-6'>
                <img src={image1} alt=''/>
            </div>
        </div>

        <div className='sectionWelcome flex-reverse'>
            <div className='leftSectionWelcome col-md-6'>
                <img src={image2} alt=''/>
            </div>
            <div className='rightSectionWelcome col-md-6 '>
                <span className='title-span'>
                Romantic</span>
                <h3>
                RESTAURANT</h3>
                <p>
                Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros, in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.</p>
                <Link className='' to='/about' >our story</Link>
            </div>
        </div>

    </section>
    );
}

export default ContainerAbout;
