import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import './CardItem.scss';


const Item = () => {
    return (
        <div className='item'>
            <img
                src='https://th.bing.com/th/id/OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH?rs=1&pid=ImgDetMain'
                alt='kunalborkar'
            />
            <p>{"Round neck cotton Tee"}</p>
            <div className='item-price'>
                <div className='item-price-old'>Rs. {600}</div>
                <div className='item-price-new'>Rs. {40}</div>
            </div>
            
            <Box component="fieldset" borderColor="transparent" sx={{display: "flex",alignItems : "center",gap:'6px'}}>
                <Rating
                    name="simple-controlled"
                    value={5} 
                />
            (210)
            </Box>
            
        </div>
    );
};

export default Item;
