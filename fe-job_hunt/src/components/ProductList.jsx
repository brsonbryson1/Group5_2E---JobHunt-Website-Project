import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: 'Apple iPhone 15 Pro',
            description: '128GB, Titanium Blue, A17 Bionic Chip, 6.1-inch Display',
            price: '₱72,990.00',
            category: 'Electronics',
            stock: 12,
            postedDate: '12/14/2024',
        },
        {
            id: 2,
            name: 'Samsung Galaxy S24 Ultra',
            description: '256GB, Phantom Black, 6.8-inch Dynamic AMOLED 2X Display',
            price: '₱68,990.00',
            category: 'Electronics',
            stock: 8,
            postedDate: '12/13/2024',
        },
        {
            id: 3,
            name: 'Sony WH-1000XM5 Headphones',
            description: 'Wireless Noise-Cancelling Over-Ear Headphones, 30-Hour Battery Life',
            price: '₱19,990.00',
            category: 'Accessories',
            stock: 20,
            postedDate: '12/12/2024',
        },
    ];

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Product Listings
            </Typography>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id} sx={{ border: '1px solid #ccc', borderRadius: 2, marginBottom: 2 }}>
                        <ListItemText
                            primary={product.name}
                            secondary={
                                <>
                                    <Typography variant="body2">{product.description}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {product.category} | Price: {product.price} | Stock: {product.stock}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ProductList;
