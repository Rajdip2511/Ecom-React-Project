// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, Box, Rating, Chip, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulated product fetch - replace with actual API call
    setProduct({
      id: parseInt(id),
      name: `Premium Product ${id}`,
      price: 99.99,
      rating: 4.5,
      // Using a more reliable image source
      image: `https://picsum.photos/800/800?random=${id}`,
      description: 'Experience premium quality with our flagship product. Features include high-performance specifications, elegant design, and superior build quality.',
      status: 'In Stock',
      features: [
        'Premium Build Quality',
        'Advanced Technology',
        '1 Year Warranty',
        '24/7 Support'
      ]
    });
  }, [id]);

  if (!product) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Typography>Loading...</Typography>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '500px',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'background.paper'
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {product.status && (
              <Chip
                label={product.status}
                color="primary"
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  fontWeight: 'bold'
                }}
              />
            )}
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {product.name}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.5} readOnly size="large" />
            <Typography variant="body1" sx={{ ml: 1 }}>
              ({product.rating})
            </Typography>
          </Box>
          
          <Typography 
            variant="h4" 
            color="primary" 
            sx={{ 
              mb: 3,
              fontWeight: 'bold'
            }}
          >
            ${product.price.toFixed(2)}
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4 }}>
            {product.description}
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Key Features:
          </Typography>
          
          <Box sx={{ mb: 4 }}>
            {product.features.map((feature, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                • {feature}
              </Typography>
            ))}
          </Box>
          
          <Button
            variant="contained"
            size="large"
            startIcon={<ShoppingCartIcon />}
            sx={{
              py: 2,
              px: 4,
              borderRadius: 2,
              '&:hover': {
                transform: 'scale(1.02)',
              }
            }}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;