import React from 'react';
import dinner1 from '../../Assets/Image/menu/dinner-01.jpg';
import dinner2 from '../../Assets/Image/menu/dinner-02.jpg';
import dinner3 from '../../Assets/Image/menu/dinner-03.jpg';
import dinner4 from '../../Assets/Image/menu/dinner-04.jpg';
import dinner5 from '../../Assets/Image/menu/dinner-05.jpg';
import dinner6 from '../../Assets/Image/menu/dinner-06.jpg';
const SectionDinner = () => {
    return (
        <section className='sectionDinner'>
            <div className='position-relative'>
                <div className='bcground-fixed '>
                    <h3 className="Header-h3">DINNER</h3>
                    <div className='position-absolute-dark'></div>
                </div>
            </div>

            <div className='container row m-auto px-5 py-5'>
                <div className='col-md-8 col-lg-6 m-auto'>
                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={dinner1} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                                MAECENAS TRISTIQUE</h5>
                            <p>Aenean pharetra tortor dui in pellentesque</p>
                            <span>$39.99</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={dinner3} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>

                                PINE NUT SBRISALONA</h5>
                            <p>Aenean condimentum ante erat</p>
                            <span>$65.09</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={dinner5} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                            SUSPENDISSE EU</h5>
                            <p>Proin lacinia nisl ut ultricies posuere nulla</p>
                            <span>$12.56</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 col-lg-6 m-auto'>
                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={dinner2} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>

                            CRAS MAXIMUS</h5>
                            <p>Proin lacinia nisl ut ultricies posuere nulla</p>
                            <span>$29.99</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={dinner4} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                            PINE NUT SBRISALONA</h5>
                            <p>Sed fermentum eros vitae eros</p>
                            <span>$37.09</span>
                        </div>
                    </div>

                    <div className='container-menu d-flex'>
                        <div className='container-menu-lp hov-img-zoom'>
                            <img src={dinner6} />
                        </div>
                        <div className='container-menu-rp'>
                            <h5 className='hover-red'>
                            TEMPOR MALESUADA</h5>
                            <p>Duis massa nibh porttitor nec imperdiet eget</p>
                            <span>42.75</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionDinner;
