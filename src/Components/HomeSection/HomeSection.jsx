import { useState } from 'react';
import Catagory from '../Catagory/Catagory'
import Products from '../Products/Products'
import './HomeSection.scss'

const HomeSection = () => {

  const [filteredData, setFilteredData] = useState({
    brand: [],
    range: [],
    rating: [],
  });

  const handleCatagoryData = (data) => {
    setFilteredData(data);
  };

  return (
    <div className='homesection'>
      <h1 className='result'>Search Results</h1>
      <div className='sections'>
        <div>
          <Catagory catagoryData={handleCatagoryData}/>
        </div>
        <div>
          <Products productsFilter={filteredData}/>
        </div>
      </div>
    </div>
  )
}

export default HomeSection