import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import HeaderMain from '../Shared/HeaderMain/HeaderMain';
import ChooseUs from './ChooseUs/ChooseUs';
import OurDream from './OurDream/OurDream';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';
import WorkOut from './WorkOut/WorkOut';

const Home = () => {
    const [homePageAllData, setHomePageAllData] = useState(null);
    const workOutData = homePageAllData ? homePageAllData.slice(6, 9) : '';
    const ourDreamData = homePageAllData ? homePageAllData.slice(0, 1) : '';
    const TrainingData = homePageAllData ? homePageAllData.slice(1, 3) : '';
    const chooseUsData = homePageAllData ? homePageAllData.slice(3, 6) : '';

    useEffect(() => {
        fetch("https://guarded-meadow-19744.herokuapp.com/homePageAllData")
            .then(res => res.json())
            .then(data => setHomePageAllData(data))
    }, []);
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