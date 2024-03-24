import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';

function fetchShoe(id) {
    return axios.get(`http://localhost:7000/productsshoes/${id}`).then((res) => res.data);
}

export default function ShoeDetail() {
    const { id } = useParams();
    const { data: shoe, error, isValidating: loading } = useSWR(id ? `shoe-${id}` : null, () => fetchShoe(id));
    // useSWR(id ? `shoe-${id}` : null, () => fetchShoe(id));
    console.log(shoe)

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (!shoe) {
        return <p>No shoe found.</p>;
    }

    return (
        <div>
            <h2>Shoe Detail Page</h2>
            <p>Shoe ID: {shoe.id}</p>
            <p>Name: {shoe.name}</p>
            <p>Description: {shoe.description}</p>
            <p>Price: {shoe.price}</p>
            <p>Availability quantity: {shoe.quantity}</p>
            <img src={shoe.image} alt={shoe.name} style={{ maxWidth: '300px' }} />
        </div>
    );
}

