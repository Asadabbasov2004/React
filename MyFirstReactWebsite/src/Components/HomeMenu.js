import React from 'react';
import { Link } from 'react-router-dom';
import Gallery1 from '../Assets/Image/Sidebar/photo-gallery-03.jpg';
import Gallery3 from '../Assets/Image/Sidebar/photo-gallery-14.jpg';
import Gallery4 from '../Assets/Image/Sidebar/photo-gallery-15.jpg';
import Gallery6 from '../Assets/Image/Sidebar/photo-gallery-17.jpg';
import Gallery7 from '../Assets/Image/Sidebar/photo-gallery-18.jpg';
import Gallery9 from '../Assets/Image/Sidebar/photo-gallery-20.jpg';
const HomeMenu = () => {
    return (
        <section className='HomeMenu text-center' id='HomeMenu'>
            <span className='title-span '>Discover</span>
            <h3 className='title-h3'>OUR MENU</h3>
            <div className='row container m-auto'>
                <div className='col-md-8 '>
                    <div className='row'>
                        <div className='col-sm-6   mb-3 '>
                            <div className='hov-img-zoom '>
                                <img src={Gallery3} alt=''/>
                                <Link to='/menu' className='btn-2'>Lunch</Link>
                            </div>
                        </div>
                        <div className='col-sm-6   mb-3 '>
                            <div className='hov-img-zoom'>
                                <img src={Gallery1} alt='' />
                                <Link to='/menu' className='btn-2'>Dinner</Link>
                            </div>
                        </div>
                        <div className='col-12 pt-2'>
                            <div className='hov-img-zoom w-100'>
                                <img src={Gallery9}  alt=''/>
                                <Link to='/menu'className='btn-2'>Happy hour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='row '>
                        <div className='col-12 '>
                            <div className='hov-img-zoom'>
                                <img src={Gallery4}  alt=''/>
                                <Link to='/menu'className='btn-2'>Drink</Link>
                            </div>
                        </div> 
                        <div className='col-12 pt-4'>
                            <div className='hov-img-zoom'>
                                <img src={Gallery6} alt='' />
                                <Link to='/menu'className='btn-2'>Starters</Link>
                            </div>
                        </div> 
                        <div className='col-12 pt-4'>
                            <div className='hov-img-zoom'>
                                <img src={Gallery7}  alt=''/>
                                <Link to='/menu'className='btn-2'>Desserts</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeMenu;
