// Page1.js
import React from 'react';
import { Box, Button, TextField } from '@mui/material';

function Page1(props) {
  const { handleNext, setCustomer, customer } = props;

  const handleNameChange = (event) => {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      name: event.target.value,
    }));
  };

  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={customer.name || ''}
        onChange={handleNameChange}
        variant="outlined"
        margin="normal"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: 2,
          alignItems: 'flex-start',
        }}
      >
        <Button variant="contained" onClick={handleNext} sx={{ mb: 2 }}>
          Next
        </Button>
      </Box>
    </div>
  );
}

export default Page1;
