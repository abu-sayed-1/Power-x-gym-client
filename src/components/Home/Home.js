import React from 'react';
import HeaderMain from '../Shared/HeaderMain/HeaderMain';
import OurDream from './OurDream/OurDream';
import WorkOut from './WorkOut/WorkOut';

const Home = () => {
    return (
        <div>
            <HeaderMain />
            <WorkOut />
            <OurDream />
        </div>
    );
};

export default Home;