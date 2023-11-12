import React from 'react';
import Time from '../Time';
const Mainpart = () => {
    return (
        <section className='HomeReservation'>
        <div className='container '>
           <div className='row m-auto'>
           <div className='col-lg-12 pb-2 px-5'>
                <div className='HomeReservation-text m-auto text-center'>
                    <span className="title-span t-center d-block mb-3">
                        Reservation
                    </span>
                    <h3 className="title-h3 text-dark mb-4">
                        Book table
                    </h3>
                </div>
                <form className='form px-5'>
                        <div className='row flex-row px-5'>
                           <div className='col-md-4'>
                           <span className="d-block">
                                Date
                            </span>
                            <input type='date'></input>
                           </div>
                           <div className='col-md-4'>
                           <span className="d-block">
                                Time
                            </span>
                            <div> <Time /> </div>
                           </div>
                            <div className='col-md-4'>
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
                        </div>
                        <div className='row px-5'>
                            <div className='col-md-4'>
                            <span className='d-block'>Name</span>
                            <input type='text' placeholder='Name' /> 
                            </div>
                            <div className='col-md-4'>
                            <span className='d-block'>Surname</span>
                            <input type='text' placeholder='Surname' /> 
                            </div>
                            <div className='col-md-4'>
                            <span className='d-block'>Email</span>
                            <input type='text' placeholder='Email' />
                            </div>
                           
                         
                        </div>
                    <div className='form-btn btn-2 m-auto mt-5'>Book Table</div>
                </form>
            </div>
           </div>
          <div className='infoReservation px-5 py-5 mt-5'>
            <div className='px-5' >
            <h4>RESERVE BY PHONE</h4>
            <p>
            Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate , lectus vel volutpat efficitur, orci lacus sodales sem, sit amet quam: <a href=''>(001) 345 6889</a>
            </p>
            </div>
            <div className='px-5'>
                <h4>
                FOR EVENT BOOKING
                </h4>
                <p>
                Donec feugiat ligula rhoncus: <a href=''> (001) 345 6889</a> , varius nisl sed, tinci-dunt lectus sodales sem.
                </p>
            </div>

          </div>
        </div>
    </section>
        );
}

export default Mainpart;
