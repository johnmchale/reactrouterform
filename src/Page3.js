// Page1.js
import React from 'react';
import { Box, Button, TextField } from '@mui/material';

function Page3(props) {
  const { handleBack, setCustomer, customer } = props;

  const handlePhoneChange = (event) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      phone: event.target.value,
    }));
  };

  return (
    <div>
      <TextField
        label="Phone"
        name="phone"
        value={customer.phone || ''}
        onChange={handlePhoneChange}
        variant="outlined"
        margin="normal"
      />
      <Box sx={{ display: 'flex', gap: '16px', mt: 2 }}>
        <Button variant="contained" onClick={handleBack}>
          Back
        </Button>
      </Box>
    </div>
  );
}

export default Page3;
