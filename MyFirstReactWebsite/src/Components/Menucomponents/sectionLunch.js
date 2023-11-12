import React from 'react';
import lunch1 from '../../Assets/Image/menu/lunch-01.jpg';
import lunch2 from '../../Assets/Image/menu/lunch-02.jpg';
import lunch3 from '../../Assets/Image/menu/lunch-03.jpg';
import lunch4 from '../../Assets/Image/menu/lunch-04.jpg';
import lunch5 from '../../Assets/Image/menu/lunch-05.jpg';
import lunch6 from '../../Assets/Image/menu/lunch-06.jpg';
const SectionLunch = () => {
    return (
        <section className='sectionLunchMenu'>
            <div className='position-relative'>
                <div className='bcground-fixed '>
                    <h3 className="Header-h3">LUNCH</h3>
                    <div className='position-absolute-dark'></div>
                </div>
            </div>

            <div className='container row m-auto px-5 py-5'>
                <div className='col-md-8 col-lg-6 m-auto'>
                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={lunch1} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                                SED VARIUS</h5>
                            <p>Aenean pharetra tortor dui in pellentesque</p>
                            <span>$29.79</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={lunch3} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                                TEMPUS ALIQUET</h5>
                            <p>Aenean condimentum ante erat</p>
                            <span>$45.09</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={lunch5} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                                DUIS MASSA</h5>
                            <p>Proin lacinia nisl ut ultricies posuere nulla</p>
                            <span>$12.75</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 col-lg-6 m-auto'>
                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={lunch2} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>

                                SBRISALONA</h5>
                            <p>Proin lacinia nisl ut ultricies posuere nulla</p>
                            <span>$29.79</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={lunch4} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                                T
                                CRAS EGET MAGNA</h5>
                            <p>Sed fermentum eros vitae eros</p>
                            <span>$67.09</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={lunch6} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                            NULLAM MAXIMUS</h5>
                            <p>Duis massa nibh porttitor nec imperdiet eget</p>
                            <span>212.70</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionLunch;
