import React from 'react';
import { useLoaderData } from 'react-router-dom';
import VolunteerCard from './VolunteerCard';

const Home = () => {
    const volunteers = useLoaderData();
    console.log(volunteers);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto gap-5'>
            {
                volunteers.map(volunteer => <VolunteerCard
                    key={volunteer._id}
                    volunteer={volunteer}
                ></VolunteerCard>)
            }
        </div>
    );
};

export default Home;