import React, { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { Stepper, Step, StepLabel } from '@mui/material';
import { Box, Button } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  const steps = ['Page 1', 'Page 2', 'Page 3'];
  const [customer, setCustomer] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (path) => {
    setActiveStep(activeStep + 1);
    history.push(path);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    history.goBack();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Customer:', customer);
    setSubmitted(true);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route exact path="/">
            <Page1
              handleNext={() => handleNext('/page2')}
              setCustomer={setCustomer}
              customer={customer}
            />
          </Route>
          <Route path="/page2">
            <Page2
              handleBack={handleBack}
              handleNext={() => handleNext('/page3')}
              setCustomer={setCustomer}
              customer={customer}
            />
          </Route>
          <Route path="/page3">
            <Page3
              handleBack={handleBack}
              setCustomer={setCustomer}
              customer={customer}
            />
          </Route>
        </Switch>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 2,
            alignItems: 'flex-start',
          }}
        >
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>

      {submitted && (
        <div>
          <h2>You submitted:</h2>
          <pre>{JSON.stringify(customer, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
