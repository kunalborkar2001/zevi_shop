import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate instead of useHistory
import './Searchbar.scss';

const Searchbar = ({ handleDisplay, displayNav }) => {
    const navigate = useNavigate();  // Use useNavigate instead of useHistory
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any search-related logic here if needed
        // ...

        // Redirect to "/home"
        navigate('/home');
    };

    return (
        <div className='searchbar' style={{ display: displayNav === true ? 'block' : 'none' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Search'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClick={handleDisplay}
                />

                <i type='submit' className='fa-solid fa-magnifying-glass'></i>

            </form>
        </div>
    );
};

export default Searchbar;
