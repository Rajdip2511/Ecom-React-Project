import { Container, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

function Cart() {
  // Simulated cart data - replace with actual cart management
  const cartItems = [];
  const total = 0;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={item.name}
                  secondary={`Quantity: ${item.quantity}`}
                />
                <Typography variant="body1">
                  ${item.price * item.quantity}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h5" gutterBottom>
              Total: ${total}
            </Typography>
            <Button variant="contained" size="large">
              Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Cart;