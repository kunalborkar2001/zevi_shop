
import './Searchbar.scss'

const Searchbar = () => {
    return (
        <div className='searchbar'>
                <input type="text" placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass"></i>
            
        </div>
    )
}

export default Searchbar