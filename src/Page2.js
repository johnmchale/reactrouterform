import { Button, TextField } from '@mui/material';

function Page2({ handleBack, setCustomer, customer }) {
  const handleEmailChange = (event) => {
    setCustomer({ ...customer, email: event.target.value });
    sessionStorage.setItem('email', event.target.value);
  };

  return (
    <div>
      <h1>Page 2</h1>
      <p>Confirm email: {customer.email}</p>
      <TextField id="email-input" label="Email" onChange={handleEmailChange} />
      <br />
      <Button variant="contained" onClick={handleBack}>
        Back
      </Button>
    </div>
  );
}
export default Page2;
