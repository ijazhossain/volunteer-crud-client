import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RegisterRow from '../RegisterRow/RegisterRow';
import Swal from 'sweetalert2';

const RegisterList = () => {
    const loadedData = useLoaderData()
    const [allRegisters, setAllRegisters] = useState(loadedData)
    // console.log(allRegisters);
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
                            const remaining = allRegisters.filter(registerItem => registerItem._id !== _id)
                            setAllRegisters(remaining)

                        }
                    })
            }
        })
    }
    const handleConfirmBooking = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Status Updated',

                    })

                    const remaining = allRegisters.filter(item => item._id !== _id);
                    console.log(remaining);
                    const updatedItem = allRegisters.find(item => item._id === _id);
                    updatedItem.status = 'confirm';
                    console.log(updatedItem);
                    setAllRegisters([...remaining, updatedItem])
                    console.log(allRegisters);

                }
            })
    }
    return (
        <div>
            <h1 className="text-4xl text-center my-8">Volunteer Register List</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allRegisters.map(item => <RegisterRow
                                key={item._id}
                                item={item}
                                handleDelete={handleDelete}
                                handleConfirmBooking={handleConfirmBooking}
                            ></RegisterRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default RegisterList;