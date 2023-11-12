import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../Assets/Image/Home-image/intro-01.jpg';
import blog2 from '../Assets/Image/Home-image/intro-02.jpg';
import blog3 from '../Assets/Image/Home-image/intro-03.jpg';
const SectionIntro = () => {
    return (
        <section id='SectionIntro'>
            <div className='SectionIntro-attechment'>
                <span className='title-span d-block'>
                    Discover</span>
                <h3 className='title-h3'>
                    PATO PLACE
                </h3>
            </div>
            <div className='blog-content d-flex '>
                <div >
                    <div className='blog-img'> <img src={blog1} /></div>
                    <h4>
                        Romantic Restaurant</h4>
                    <p>
                        Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                    <Link to='/about'>learn more<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div >
                    <div className='blog-img'>
                        <img src={blog2} />
                    </div>
                    <h4>
                        Delicious Food</h4>
                    <p>Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna</p>
                    <Link to='/about'>learn more<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div >
                    <div className='blog-img'>
                        <img src={blog3} />
                    </div>
                    <h4>
                        Red Wines You Love</h4>
                    <p>Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                    <Link to='/about'>learn more<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    );
}

export default SectionIntro;
