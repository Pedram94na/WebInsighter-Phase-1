import React, { useRef } from 'react';
import './contact-us.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Grid, Box } from '@mui/material';
import validationSchema from './Validation_yup';
import HandleSubmit from './HandleSubmit';

const ContactUs = () => {
  const formRef = useRef(); // Ref for the form

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        websiteUrl: '',
        content: '',
        gdpr: false
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => HandleSubmit(values, actions)}
    >
      {({ isSubmitting }) => (
        <Form id='contact-us-part' ref={formRef} className='contact-form_form'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Field as={TextField} fullWidth name="firstName" placeholder="First Name" helperText={<ErrorMessage name="firstName" />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field as={TextField} fullWidth name="lastName" placeholder="Last Name" helperText={<ErrorMessage name="lastName" />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field as={TextField} fullWidth name="email" type="email" placeholder="Email" helperText={<ErrorMessage name="email" />} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field as={TextField} fullWidth name="companyName" placeholder="Company Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field as={TextField} fullWidth name="websiteUrl" placeholder="Website URL" />
            </Grid>
            <Grid item xs={12}>
              <Field as={TextField} fullWidth name="content" placeholder="Message Content" multiline rows={4} helperText={<ErrorMessage name="content" />} />
            </Grid>
          </Grid>
          <label>
            <Field type="checkbox" name="gdpr" />
            Agree to GDPR terms
          </label>
          <Box mt={2}>
            <Button type="submit" disabled={isSubmitting} variant='outlined'>
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUs;
