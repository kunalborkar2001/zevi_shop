

import './Searchbar.scss'

const Searchbar = ({ handleDisplay , displayNav}) => {
    // console.log(displayNav);
    return (
        <div className='searchbar' style={{ display: displayNav === true ? "block" : "none" }}>
            <input type="text" placeholder='Search' onClick={handleDisplay} />
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    );
};

export default Searchbar;