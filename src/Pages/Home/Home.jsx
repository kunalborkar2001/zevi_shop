import { useState } from 'react';
import LatestTrends from '../../Components/LatestTrends/LatestTrends';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';
import HomeSection from '../../Components/HomeSection/HomeSection';

const Home = () => {
    const [displayLatestTrends, setDisplayLatestTrends] = useState(false);

    const handleChange = () => {
        setDisplayLatestTrends(!displayLatestTrends);
        console.log(displayLatestTrends);
    };

    return (
        <div>
            <Navbar handleDisplay={handleChange} />
            <LatestTrends display={displayLatestTrends} />
            <HomeSection />
        </div>
    );
};

export default Home;
