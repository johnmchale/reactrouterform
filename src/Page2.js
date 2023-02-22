import { useState } from "react";
import { Button, TextField } from "@mui/material";

function Page2({ handleBack, handleNext }) {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    sessionStorage.setItem("email", event.target.value);
  };

  return (
    <div>
      <h1>Page 2</h1>
      <p>Confirm name: {sessionStorage.getItem("name")}</p>
      <TextField id="email-input" label="Email" value={email} onChange={handleEmailChange} />
      <br />
      <Button variant="contained" onClick={handleBack}>
        Back
      </Button>
      {/* <Button variant="contained" onClick={handleNext}>
        Next
      </Button> */}
    </div>
  );
}

export default Page2;
