import React from 'react';
import { Link } from 'react-router-dom';
import Gallery1 from'../Assets/Image/Sidebar/photo-gallery-03.jpg';
import Gallery2 from'../Assets/Image/Sidebar/photo-gallery-13.jpg';
import Gallery3 from'../Assets/Image/Sidebar/photo-gallery-14.jpg';
import Gallery4 from'../Assets/Image/Sidebar/photo-gallery-15.jpg';
import Gallery5 from'../Assets/Image/Sidebar/photo-gallery-16.jpg';
import Gallery6 from'../Assets/Image/Sidebar/photo-gallery-17.jpg';
import Gallery7 from'../Assets/Image/Sidebar/photo-gallery-18.jpg';
import Gallery8 from'../Assets/Image/Sidebar/photo-gallery-19.jpg';
import Gallery9 from'../Assets/Image/Sidebar/photo-gallery-20.jpg';
const Footer = () => {
    return (
        <footer>
            <div className='container row m-auto'>
                <div className='col-sm-6 col-md-4 p-3'>
                    <h4>CONTACT US</h4>
                    <ul>
                        <li >
                            <i className="fa-solid fa-location-dot"></i>
                            Azerbaijan Baku ,Yasamal H.Verdiyev
                        </li>
                        <li >
                            <i className="fa-solid fa-phone"></i>
                            (+1) 96 716 6879
                        </li>
                        <li >
                            <i className="fa-solid fa-envelope">
                            </i>
                            asad007006@gmail.com
                        </li>
                    </ul>
                    <h4 className="txt13 m-b-32">
                        Opening Times
                    </h4>
                    <span className='d-block'>9:00 - 23:00</span>
                    <span className='d-block'>Every day</span>
                </div>
                <div className='col-sm-6 col-md-4 p-3'>
                    <h4 className="">
                        Latest twitter
                    </h4>
                    <div className='mt-3 mb-4'>
                        <Link to="https://fontawesome.com/icons/twitter?f=brands&s=solid" >
                            <span>
                                <i className="fa-brands fa-twitter"></i>
                                Asad.Abbsov
                            </span>
                        </Link>
                        <p className='mt-2'>
                            I am studying computer science at Baku State University.It is my first React website
                        </p>
                    </div>
                    <div>
                        <Link to="https://mail.google.com" >
                            <span>
                                <i className="fa-solid fa-envelope"></i>
                                asad007006@gmail.com
                            </span>
                        </Link>
                        <p>
                            While fixing this project, I used the maximum of React and Bootstrap capabilities
                        </p>
                        <span>15.09.2023</span>
                    </div>

                </div>
                <div className='col-sm-6 col-md-4 p-3'>
                    <div className='sidebarGallery d-block text-center'>
                        <h4 className='mb-3 mt-0'>gallery</h4>
                        <div  className='sidebarGalleryItem'>
                            <img src={Gallery1} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery2} />
                            <div className='absolute-red'>
                            </div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery3} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery4} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery5} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery6} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery7} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery8} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem'>
                            <img src={Gallery9} />
                            <div className='absolute-red'></div>
                        </div>
                        <div className='sidebarGalleryItem-slide'>
                        <div className='absolute-red'></div>
                        </div>
                    </div>
                </div>
            </div>
            <a href='#Header'>
            <div className='arrow'>
            <i className="fa-solid fa-angles-up"></i>
            </div>
            </a>
          
        </footer>
    );
}

export default Footer;
