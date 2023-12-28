import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './CardItem.scss';

const Item = ({ name, new_price, old_price, image }) => {
    const [isRed, setIsRed] = useState(false);

    const handleHeartClick = () => {
        setIsRed(!isRed);
    };

    return (
        <div className='item'>
            <div className='imgproduct'>
            <img src={image} alt='kunalborkar' />
            <div className='viewproduct'>
                <h2>View Product</h2>
            </div>
            </div>
            <p>{name}</p>
            <div className='item-price'>
                <div className='item-price-old'>Rs. {old_price}</div>
                <div className='item-price-new'>Rs. {new_price}</div>
            </div>

            <Box component="fieldset" borderColor="transparent" sx={{ display: "flex", alignItems: "center", gap: '6px' }}>
                <Rating
                    name="simple-controlled"
                    value={5}
                />
                (210)
            </Box>

            <i
                id="heart"
                className={`fa fa-heart${isRed ? ' red' : ''}`}
                onClick={handleHeartClick}
                style={{ fontSize: '24px' }}
            ></i>
        </div>
    );
};

export default Item;
