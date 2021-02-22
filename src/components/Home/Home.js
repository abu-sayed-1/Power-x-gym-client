import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import HeaderMain from '../Shared/HeaderMain/HeaderMain';
import ChooseUs from './ChooseUs/ChooseUs';
import OurDream from './OurDream/OurDream';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';
import WorkOut from './WorkOut/WorkOut';

const Home = () => {
    const [homePageAllData, setHomePageAllData] = useState(null);
    const workOutData = homePageAllData ? homePageAllData.slice(0, 3) : '';
    const ourDreamData = homePageAllData ? homePageAllData.slice(3, 4) : '';
    const TrainingData = homePageAllData ? homePageAllData.slice(4, 6) : '';
    const chooseUsData = homePageAllData ? homePageAllData.slice(6, 9) : '';

    useEffect(() => {
        fetch("http://localhost:4000/homePageAllData")
            .then(res => res.json())
            .then(data => setHomePageAllData(data))
    }, [])
    return (
        <div>
            <HeaderMain />
            <WorkOut workOutData={workOutData} />
            <OurDream ourDreamData={ourDreamData} />
            <TrainingPrograms TrainingData={TrainingData} />
            <ChooseUs chooseUsData={chooseUsData} />
            <Footer />
        </div>
    );
};

export default Home;