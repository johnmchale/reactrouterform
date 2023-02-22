import { Button, TextField } from "@mui/material";

function Page1({ handleNext, setCustomer, customer }) {
  const handleNameChange = (event) => {
    setCustomer({ ...customer, name: event.target.value });
  };

  return (
    <div>
      <h1>Page 1</h1>
      <p>Confirm name: {customer.name}</p>
      <TextField id="name-input" label="Name" onChange={handleNameChange} />
      <br />
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default Page1;
