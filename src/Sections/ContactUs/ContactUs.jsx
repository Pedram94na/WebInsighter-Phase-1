import React, { useState, useRef } from 'react';
import './contact-us.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Grid, Box } from '@mui/material';
import validationSchema from './Validation_yup';
import HandleSubmit from './HandleSubmit';
import { Part } from '../../Components';

const ContactUs = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const formRef = useRef();

  return (
    <Part id='contact-us-part' title="Contact Us" color="#0090FF">
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
        onSubmit={(values, actions) => {
          HandleSubmit(values, actions, setShowOverlay);
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={formRef} className='contact-form_form'>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Field as={TextField} fullWidth name="firstName" placeholder="First Name" helperText={<ErrorMessage name="firstName" component="span" className="error-message" />} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field as={TextField} fullWidth name="lastName" placeholder="Last Name" helperText={<ErrorMessage name="lastName" component="span" className="error-message" />} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field as={TextField} fullWidth name="email" type="email" placeholder="Email" helperText={<ErrorMessage name="email" component="span" className="error-message" />} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field as={TextField} fullWidth name="companyName" placeholder="Company Name" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field as={TextField} fullWidth name="websiteUrl" placeholder="Website URL" />
              </Grid>
              <Grid item xs={12}>
                <Field as={TextField} fullWidth name="content" placeholder="Message Content" multiline rows={4} helperText={<ErrorMessage name="content" component="span" className="error-message" />} />
              </Grid>
            </Grid>
            <div className="gdpr-container">
              <Field type="checkbox" name="gdpr" id="gdpr-checkbox" />
              <label htmlFor="gdpr-checkbox">Agree to GDPR terms</label>
            </div>
            <ErrorMessage name="gdpr" component="span" className="gdpr-error" />

            <Box mt={2}>
              <Button type="submit" disabled={isSubmitting} variant='outlined'>
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {showOverlay && (
        <div className='confirmation-overlay'>
          <h3>Message Sent Successfully!</h3>
          <p>
            Thank you for contacting WebInsighter.<br />
            We will contact you in the next 24 hours or less.<br />
            We are excited to discuss your project!
          </p>
        </div>
      )}
    </Part>
  );
};

export default ContactUs;
