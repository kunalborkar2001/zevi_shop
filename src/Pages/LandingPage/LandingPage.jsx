import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Searchbar from '../../Components/SearchBar/Searchbar'
import "./LandingPage.scss"
import LatestTrends from '../../Components/LatestTrends/LatestTrends';

const LandingPage = () => {

  const [displayLatestTrends, setDisplayLatestTrends] = useState(false);

  const handleChange = () => {
    setDisplayLatestTrends(!displayLatestTrends);
    console.log(displayLatestTrends);
  };

  return (
    <div className='landingpage'>
      <Navbar displayNav={false} />
      <div className='LandingSearch'>
        <Searchbar displayNav={true} handleDisplay={handleChange} />
        <div className='landingTrends'>
          <LatestTrends display={displayLatestTrends} />

        </div>
      </div>
    </div>
  )
}

export default LandingPage