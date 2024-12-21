// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button, Badge, Box } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography 
          variant="h6" 
          component="div" 
          onClick={() => navigate('/')}
          sx={{ 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}
        >
          My Shop
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            onClick={() => navigate('/')}
            sx={{ fontWeight: 'bold' }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            onClick={() => navigate('/products')}
            sx={{ fontWeight: 'bold' }}
          >
            Products
          </Button>
          <Button 
            color="inherit" 
            onClick={() => navigate('/cart')}
            sx={{ ml: 1 }}
          >
            <Badge badgeContent={0} color="error">
              <ShoppingCart />
            </Badge>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;