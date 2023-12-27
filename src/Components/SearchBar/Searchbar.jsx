
import './Searchbar.scss'

const Searchbar = ({ handleDisplay }) => {
    return (
        <div className='searchbar'>
            <input type="text" placeholder='Search' onClick={handleDisplay} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
};

export default Searchbar;