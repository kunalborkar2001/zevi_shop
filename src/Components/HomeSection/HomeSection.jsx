import Catagory from '../Catagory/Catagory'
import Products from '../Products/Products'
import './HomeSection.scss'

const HomeSection = () => {
  return (
    <div className='homesection'>
      <h1 className='result'>Search Results</h1>
      <div className='sections'>
        <div>
          <Catagory />
        </div>
        <div>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default HomeSection