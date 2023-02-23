import React from 'react';
import { Box, Button, TextField } from '@mui/material';

function Page2(props) {
  const { handleBack, handleNext, setCustomer, customer } = props;

  const handleEmailChange = (event) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      email: event.target.value,
    }));
  };

  return (
    <div>
      <TextField
        label="Email"
        name="email"
        value={customer.email || ''}
        onChange={handleEmailChange}
        variant="outlined"
        margin="normal"
      />
      <Box sx={{ display: 'flex', gap: '16px', mt: 2 }}>
        <Button variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </div>
  );
}

export default Page2;
