import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const RegisterEvent = () => {
    const volunteerEvent = useLoaderData();
    const { user } = useContext(AuthContext)
    // console.log(volunteerEvent);
    const { _id, title, img, date, description } = volunteerEvent;
    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const description = form.description.value;
        console.log(name, email, date, description);
        const bookingsDetails = {
            name,
            email: user?.email,
            date,
            description,
            volunteer_id: _id,
            title,
            img

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingsDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Registration for this event successful',

                    })
                }
            })
    }
    return (
        <>
            <h2 className='text-3xl my-5 text-center font-bold'>Register as volunteer</h2>
            <form onSubmit={handleBooking} className='w-1/2 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">FullName</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='name' placeholder="FullName" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username or Email</span>
                    </label>
                    <label className="input-group">

                        <input type="email" name='email' placeholder="username or email" className="input input-bordered w-full" defaultValue={user?.email} readOnly />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username or Email</span>
                    </label>
                    <label className="input-group">

                        <input type="date" name='date' placeholder="Date" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username or Email</span>
                    </label>
                    <label className="input-group">

                        <textarea rows="10" cols="50" name='description' placeholder="Description" className=" border-2 w-full p-4" />
                    </label>
                </div>
                <input className='w-full  my-8 btn btn-success' type="submit" value="Submit" />
            </form>
        </>
    );
};

export default RegisterEvent;