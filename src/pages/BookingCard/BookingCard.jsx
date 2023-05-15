import React from 'react';
import Swal from 'sweetalert2';

const BookingCard = ({ booking, handleDelete }) => {
    const { _id, title, img, date } = booking;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{date}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Cancel Event</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;