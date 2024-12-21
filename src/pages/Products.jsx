// src/pages/Products.jsx
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, Box, Rating, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Products() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 199.99,
      // Use reliable placeholder service
      image: 'https://picsum.photos/400/400?random=1',
      rating: 4.5,
      description: 'High-quality wireless headphones with noise cancellation',
      status: 'New'
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 299.99,
      image: 'https://picsum.photos/400/400?random=2',
      rating: 4.8,
      description: 'Advanced smartwatch with health monitoring features',
      status: 'Bestseller'
    },
    {
      id: 3,
      name: 'Ultra HD Camera',
      price: 599.99,
      image: 'https://picsum.photos/400/400?random=3',
      rating: 4.7,
      description: 'Professional-grade camera with 4K video capability',
      status: 'Sale'
    },
    {
      id: 4,
      name: 'Gaming Laptop',
      price: 1299.99,
      image: 'https://picsum.photos/400/400?random=4',
      rating: 4.9,
      description: 'High-performance gaming laptop with RTX graphics',
      status: 'Limited'
    },
    {
      id: 5,
      name: 'Wireless Earbuds',
      price: 149.99,
      image: 'https://picsum.photos/400/400?random=5',
      rating: 4.6,
      description: 'Premium wireless earbuds with active noise cancellation'
    },
    {
      id: 6,
      name: 'Smartphone Pro Max',
      price: 999.99,
      image: 'https://picsum.photos/400/400?random=6',
      rating: 4.8,
      description: 'Latest flagship smartphone with advanced camera system',
      status: 'Popular'
    }
  ];

  return (
    <Box sx={{ 
      py: 4, 
      minHeight: '100vh',
      width: '100%'
    }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            mb: 4, 
            fontWeight: 800,
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          Featured Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card 
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ position: 'relative', paddingTop: '100%' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
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
                        fontWeight: 'bold',
                        zIndex: 1
                      }}
                    />
                  )}
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1,
                      minHeight: 60,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={product.rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({product.rating})
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h5" 
                    color="primary" 
                    sx={{ 
                      mb: 2,
                      fontWeight: 'bold'
                    }}
                  >
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => navigate(`/product/${product.id}`)}
                    sx={{
                      py: 1.5,
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Products;