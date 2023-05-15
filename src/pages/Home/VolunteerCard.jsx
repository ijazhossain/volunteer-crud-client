import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerCard = ({ volunteer }) => {
    const { _id, title, img, date, description } = volunteer;
    return (
        <Link to={`/volunteer/${_id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>


                </div>
            </div>
        </Link>
    );
};

export default VolunteerCard;