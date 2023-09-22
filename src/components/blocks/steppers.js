import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormHelperText from '@mui/material/FormHelperText';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import SelectionType from '../forms/SelectionType';
import ExpectedInformation from '../forms/ExpectedInformation';
import UploadDocuments from '../forms/UploadDocuments';
import {Configuration} from '../../constants';

const steps = [Configuration.FLOW.SelectionType, Configuration.FLOW.UploadDocuments, Configuration.FLOW.SignOfferLetter, Configuration.FLOW.WelcomeCourse, Configuration.FLOW.SalaryDetails, Configuration.FLOW.SignNDADocs, Configuration.FLOW.PreviewInfo];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      phone: '',
      residence: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email'),
      password: Yup.string()
        .min(8),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
      firstName: Yup.string()
        .required('First Name is required'),
      lastName: Yup.string()
        .required('Last Name is required'),
    }),
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  });

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <SelectionType formik={formik} />;
      case 1:
        return <ExpectedInformation formik={formik} />;
      case 2:
        return <UploadDocuments formik={formik} />;
      default:
        return <div>404: Not Found</div>
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step}>
            <StepLabel
              optional={
                index === 6 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step}
            </StepLabel>
            <StepContent>
              {formContent(activeStep)}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}