import { useState } from 'react';
import { useHistory, Route, Switch } from 'react-router-dom';
import { Stepper, Step, StepLabel } from '@mui/material';
import { Button } from '@mui/material';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const history = useHistory();
  const steps = ['Page 1', 'Page 2'];
  const [customer, setCustomer] = useState({});

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
              setCustomer={setCustomer}
              customer={customer}
            />
          </Route>
        </Switch>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
