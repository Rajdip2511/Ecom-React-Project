// src/pages/Home.jsx
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right bottom, #FFFFFF, #F0F8FF)',
        minHeight: '90vh',
        pt: 8
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '3rem', md: '4.5rem' },
              mb: 2
            }}
          >
            Welcome to Rajdip's Shop!
          </Typography>
          <Typography 
            variant="h5" 
            component="h2" 
            color="text.secondary"
            sx={{ 
              maxWidth: '600px',
              mb: 4
            }}
          >
            Discover our amazing (Dummy) products at unbeatable prices.
            Hit the shop now to start shopping!
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            onClick={() => navigate('/products')}
            sx={{ 
              py: 2,
              px: 6,
              fontSize: '1.2rem',
              borderRadius: 2
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;