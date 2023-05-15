import React from 'react';
import Swal from 'sweetalert2';

const AddEvents = () => {
    const handleAddEvent = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const img = form.banner.value;
        console.log(title, date, description, img);
        const newEvent = {
            title,
            date,
            description,
            img
        }
        fetch('http://localhost:5000/volunteers', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Event Added',

                    })
                }
            })
    }
    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-2xl font-bold my-5'>ADD EVENT</h1>
            <form onSubmit={handleAddEvent} className='grid grid-cols-2 gap-5 bg-[#f2f2f2] p-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Event title</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='title' placeholder="Event  Title" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Event Date</span>
                    </label>
                    <label className="input-group">

                        <input type="date" name='date' placeholder="Event  Date" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <textarea type="text" placeholder="Description" name='description' className="input input-bordered w-full py-4" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Banner</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='banner' placeholder="Image Link" className="input input-bordered w-full" />
                    </label>
                </div>
                <input className='w-full col-span-2 mt-8 btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddEvents;