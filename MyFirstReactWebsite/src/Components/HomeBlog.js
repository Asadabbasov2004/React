import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../Assets/Image/Home-image/blog-01.jpg';
import blog2 from '../Assets/Image/Home-image/blog-02.jpg';
import blog3 from '../Assets/Image/Home-image/blog-03.jpg';
const HomeBlog = () => {
    return (
        <section className='homeBlog'>
            <div className='text-center'>
                <span className='title-span my-3 d-block'>
Latest News</span>
                <h3 className='title-h3'>
The Blog</h3>
            </div>
            <div className='blog-content d-flex '>
                <div >
                    <div className='blog-img'> <img src={blog1} /></div>
                    <h4>
                        Best Places for Wine
                    </h4>
                    <p>
                        Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros.</p>
                    <Link to='/about'>
                        Continue Reading<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div >
                    <div className='blog-img'>
                        <img src={blog2} />
                    </div>
                    <h4>

                        Eggs and Cheese</h4>
                    <p>Duis elementum, risus sit amet lobortis nunc justo condimentum ligula, vitae feugiat</p>
                    <Link to='/about'>
                        Continue Reading<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div >
                    <div className='blog-img'>
                        <img src={blog3} />
                    </div>
                    <h4>

                        Style the Wedding Party</h4>
                    <p>Sed ornare ligula eget tortor tempor, quis porta tellus dictum.</p>
                    <Link to='/about'>
                        Continue Reading<i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    );
}

export default HomeBlog;
