import Grid from '@mui/material/Unstable_Grid2';
import "./Products.scss";
import CardItem from "../CardItem/CardItem";
import all_product from '../Assets/all_product';
import { useEffect, useState } from 'react';

const Products = ({ productsFilter }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(all_product);
    }, []);
    
    

    return (
        <div className="products">
            <Grid container spacing={2}>
                {products.map((elem) => (
                    <Grid key={elem.id} item xs={12} sm={6} md={4} lg={3}>
                        <CardItem name={elem.name} new_price={elem.new_price} old_price={elem.old_price} image={elem.image} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Products;
