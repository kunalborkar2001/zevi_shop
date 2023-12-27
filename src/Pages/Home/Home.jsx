import { useState } from 'react';
import LatestTrends from '../../Components/LatestTrends/LatestTrends';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.scss';

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
        </div>
    );
};

export default Home;
