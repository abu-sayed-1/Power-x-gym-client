import React, { useEffect, useState } from 'react';
import HeaderMain from '../Shared/HeaderMain/HeaderMain';
import OurDream from './OurDream/OurDream';
import WorkOut from './WorkOut/WorkOut';

const Home = () => {
    const [homePageAllData, setHomePageAllData] = useState(null);
    const workOutData = homePageAllData ? homePageAllData.slice(0, 3) : '';
    const ourDreamData = homePageAllData ? homePageAllData.slice(3,4) : '';
    // const workOutData = homePageAllData ? homePageAllData.slice(0, 3) : '';

    useEffect(() => {
        fetch("http://localhost:4000/homePageAllData")
            .then(res => res.json())
            .then(data => setHomePageAllData(data))
    }, [])
    return (
        <div>
            <HeaderMain />
            <WorkOut workOutData={workOutData} />
            <OurDream ourDreamData={ourDreamData}/>
        </div>
    );
};

export default Home;