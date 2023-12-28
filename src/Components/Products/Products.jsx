import Grid from '@mui/material/Unstable_Grid2';
import "./Products.scss";
import CardItem from "../CardItem/CardItem";
import all_product from '../Assets/all_product';
import { useEffect, useState } from 'react';

const Products = ({ productsFilter }) => {
    const [products, setProducts] = useState(all_product);
    // console.log(productsFilter);
    useEffect(() => {
        // Create a copy of the original products
        let filteredProducts = [...all_product];

        // Filter products based on the criteria
        filteredProducts = filteredProducts.filter(product => {
            // Check brand
            if (productsFilter.brand.length > 0 && !productsFilter.brand.includes(product.brand)) {
                return false;
            }

            // Check range
            if (productsFilter.range.length > 0) {
                // Extract min and max values from the range string
                const [min, max] = productsFilter.range[0].split('-');

                // Convert to numbers for comparison
                const minValue = parseInt(min, 10);
                const maxValue = parseInt(max, 10);

                // Check if the product's price is within the selected range
                if (product.new_price < minValue || product.new_price > maxValue) {
                    return false;
                }
            }


            // Check rating
            if (productsFilter.rating.length > 0 && !productsFilter.rating.includes(product.rating)) {
                return false;
            }

            // If all conditions are met, include the product
            return true;
        });

        // Update the state with the filtered products
        setProducts(filteredProducts);
    }, [productsFilter]);


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
