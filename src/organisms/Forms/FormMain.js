import React, { useState, useEffect } from 'react';
import { Box } from 'grommet';
import {
  Form,
  TextInputField,
  SelectField,
  EmailInputField,
  TextAreaField,
  MaskedInputField,
  validators
} from 'grommet-controls';
import FormButton from './FormButton';

const FormMain = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async values => {
    const options = {
      subject: `Covid-19 ${process.env.CITY}-${values.$userType}`,
      replyTo: `${process.env.STATIC_FORMS_EMAIL}`, // this will set replyTo of email to email address entered in the form
      accessKey: `${process.env.STATIC_FORMS_ACCESS_KEY}`, // get your access key from https://www.staticforms.xyz
      ...values
    };

    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(options),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (e) {
      console.log('An error occurred', e);
      setFormStatus('error');
    }
  };

  //  Reset the button to idle
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormStatus('idle');
    }, 3000);
    return () => clearTimeout(timer);
  }, [formStatus]);

  return (
    <Form
      basis="medium"
      focusFirstChild={false}
      onSubmit={values => handleSubmit(values)}
    >
      <Box>
        <SelectField
          label="Who I am"
          name="$userType"
          options={['Restaurant', 'Business', 'Citizen']}
          validation={[validators.required()]}
        />
        <TextInputField label="Business Name" name="$businessName" />
        <EmailInputField
          label="Email"
          name="email"
          validation={[validators.required(), validators.email()]}
        />
        <TextInputField
          label="First Name"
          name="$first"
          validation={[
            validators.required(),
            validators.minLength(2),
            validators.alphaNumeric()
          ]}
        />
        <TextInputField
          label="Last Name"
          name="$last"
          validation={[validators.minLength(2), validators.alphaNumeric()]}
        />
        <MaskedInputField
          placeholderChar="_"
          mask={[
            '(',
            /[1-9]/,
            /\d/,
            /\d/,
            ')',
            ' ',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/
          ]}
          placeholder="US Phone"
          name="phone"
          label="Phone"
        />
        <TextAreaField
          color="grey"
          rows="6"
          label="I need help with"
          name="message"
          placeholder="Leave us a message :) This helps us better understand how to best help"
        />
        <FormButton status={formStatus} />
      </Box>
    </Form>
  );
};

export default FormMain;
