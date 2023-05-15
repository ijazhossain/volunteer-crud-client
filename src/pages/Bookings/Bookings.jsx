import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingCard from '../BookingCard/BookingCard';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Booking has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== _id)
                            setBookings(remaining)
                        }
                    })
            }
        })
    }
    // Getting data from DB by email query
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data);
            })

    }, [])
    return (
        <div>
            <h1 className='text-orange-500 text-center font-bold text-4xl my-8'>My Bookings</h1>
            <div className='grid grid-cols-3 gap-5'>
                {
                    bookings.map(booking => <BookingCard
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                    ></BookingCard>)
                }
            </div>
        </div>
    );
};

export default Bookings;