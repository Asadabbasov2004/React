import React from 'react';
import Mainpart from '../Components/Reservationcomponents/Mainpart';
import HeaderReservation from '../Components/Reservationcomponents/headerReservation';
import "../css/Reservation.css";
const Reservation = () => {
    return (
        <div className='ReservationPage'>
            <HeaderReservation />
            <Mainpart />
        </div>

    );
}

export default Reservation;
