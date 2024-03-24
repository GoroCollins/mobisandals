import axios from 'axios';
import useSWR from "swr";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { categoriesURL, shoesURL } from '../Common/EndPoints';
import { Link } from 'react-router-dom';
import './Shoes.css';
import { useState } from 'react';

function Shoes({ count, setCount }) {
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category
    const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading, isValidating: categoriesValidating } =
        useSWR(categoriesURL, async () => await axios.get(categoriesURL).then((res) => res.data), { refreshInterval: 100000 });

    const { data: shoesData, error: shoesError, isLoading: shoesLoading, isValidating: shoesValidating, mutate } =
        useSWR(selectedCategory ? `${shoesURL}?category=${selectedCategory}` : shoesURL, async () => await axios.get(selectedCategory ? `${shoesURL}?category=${selectedCategory}` : shoesURL).then((res) => res.data), { refreshInterval: 100000 });

    if (categoriesLoading || shoesLoading) {
        return <p>Loading...</p>;
    }

    if (categoriesError || shoesError) {
        return <p>Error loading data: {categoriesError || shoesError}</p>;
    }

    const LoadMore = () => {
        setCount(count + 4);
        mutate();
    };

    return (
        <>
            <h1>List of Shoes</h1>
            <div className="search-container">
                {/* Categories dropdown */}
                <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory} className="select-category">
                    <option value="">All Categories</option>
                    {categoriesData.map(category => (
                        <option key={category.code} value={category.code}>{category.description}</option>
                    ))}
                </select>
                {/* Search bar */}
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />
            </div>
            <div className="shoes-container">
                {shoesData.filter(shoe => shoe.name.toLowerCase().includes(searchTerm.toLowerCase())).map((shoe, index) => (
                    <Card border="dark" key={index} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={shoe.image} />
                        <Card.Body>
                            <Card.Title>Name: {shoe.name}</Card.Title>
                            <Card.Text>Description: {shoe.description}</Card.Text>
                            <Card.Text>Price: {shoe.price}</Card.Text>
                            <Card.Text>Available quantity: {shoe.quantity}</Card.Text>
                            <Card.Text>Category: {categoriesData.find(category => category.code === shoe.category)?.description}</Card.Text>
                            {/* <Link to={`/shoe/${shoe.id}`}>
                                <Button variant="primary">Details</Button>
                            </Link> */}
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div className="btns">
                <button onClick={() => LoadMore()}>Load More</button>
            </div>
        </>
    );
}

export default Shoes;
