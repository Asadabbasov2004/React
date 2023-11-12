import React from 'react';
import Time from './Time';
import image from "../Assets/Image/Sidebar/photo-gallery-20.jpg";
const HomeReservation = () => {
    return (
        <section className='HomeReservation'>
            <div className='container row  m-auto justify-content-around'>
                <div className='col-sm-6 pb-2'>
                    <div className='HomeReservation-text m-auto text-center'>
                        <span className="title-span t-center d-block mb-3">
                            Reservation
                        </span>
                        <h3 className="title-h3 text-dark mb-4">
                            Book table
                        </h3>
                    </div>
                    <form className='form'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <span className="d-block">
                                    Date
                                </span>
                                <input type='date'></input>
                                <span className="d-block">
                                    Time
                                </span>
                                <div> <Time /> </div>
                                <span className="d-block">People</span>
                                <select>
                                    <option>1 People</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5 People</option>
                                    <option>6 People</option>
                                    <option>7 People</option>
                                    <option>8 People</option>
                                    <option>9 People</option>
                                    <option>10 People</option>
                                    <option>11 People</option>
                                    <option>12 People</option>
                                    <option>13 People</option>
                                    <option>14 People</option>
                                    <option>15 People</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <span className='d-block'>Name</span>
                                <input type='text' placeholder='Name' /> 
                                <span className='d-block'>Surname</span>
                                <input type='text' placeholder='Surname' />     
                                <span className='d-block'>Email</span>
                                <input type='text' placeholder='Email' />
                            </div>
                        </div>
                        <div className='form-btn btn-2'>Book Table</div>
                    </form>
                </div>
                <div className='col-sm-4 pb-2'>
                    <div className='hov-img-zoom'>
                        <img src={image}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeReservation;
