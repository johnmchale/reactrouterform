import { useState } from "react";
import { Button, TextField } from "@mui/material";

function Page1({ handleNext }) {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
    sessionStorage.setItem("name", event.target.value);
  };

  return (
    <div>
      <h1>Page 1</h1>
      <TextField id="name-input" label="Name" value={name} onChange={handleNameChange} />
      <br />
      <Button variant="contained" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
}

export default Page1;
