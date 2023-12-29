import './LatestTrends.scss'
import product1 from "../../Components/Assets/product_1.png"
import product2 from "../../Components/Assets/product_2.png"
import product3 from "../../Components/Assets/product_3.png"
import product4 from "../../Components/Assets/product_4.png"
import product5 from "../../Components/Assets/product_5.png"
import { Link } from "react-router-dom";


const LatestTrends = ({ display }) => {



    return (
        <div className='latersttrends' style={{ display: display ? 'flex' : 'none' }}>
            <div className='innerdiv'>
                <h3>Latest Trends</h3>

                <div className='latestimages'>
                    <Link to="/home">
                        <div>
                            <img src={product1} alt="kunalborkar2001@gmail.com" />
                            <p>Shirt with puffed sleeves</p>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div>
                            <img src={product2} alt="kunalborkar2001@gmail.com" />
                            <p>Shirt with puffed sleeves</p>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div>
                            <img src={product3} alt="kunalborkar2001@gmail.com" />
                            <p>Shirt with puffed sleeves</p>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div>
                            <img src={product4} alt="kunalborkar2001@gmail.com" />
                            <p>Shirt with puffed sleeves</p>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div>
                            <img src={product5} alt="kunalborkar2001@gmail.com" />
                            <p>Shirt with puffed sleeves</p>
                        </div>
                    </Link>

                </div>
                <h3 className='popularsuggestions'>
                    Popular Suggestions
                </h3>
                <div >
                    <p>Striped shirt dress</p>
                    <p>Santa shirts</p>
                    <p>Denim jumbsuit</p>
                    <p>Leather dresses</p>
                    <p>Solid tshits</p>
                </div>
            </div>


        </div>
    )
}

export default LatestTrends