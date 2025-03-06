import emailjs from '@emailjs/browser';

const HandleSubmit = (values, { setSubmitting, resetForm }, setShowOverlay) => {
  setSubmitting(true);

  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      values,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        console.log('SUCCESS!');
        resetForm();
        setShowOverlay(true);
        setTimeout(() => {
          setShowOverlay(false);
        }, 5000);
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send message. Please try again later.');
      }
    )
    .finally(() => {
      setSubmitting(false);
    });
};

export default HandleSubmit;
