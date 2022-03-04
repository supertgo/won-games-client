import { useState } from 'react';

import {
  CheckCircleOutline,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined';

import {
  FormError,
  FormLoading,
  FormSuccess,
  FormWrapper
} from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';

import { FieldErros, forgotValidate } from 'utils/validations';
import { useRouter } from 'next/router';

const FormForgotPassword = () => {
  const { query } = useRouter();
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErros>({
    email: '',
    password: ''
  });
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    email: (query.email as string) || ''
  });

  const [loading, setLoading] = useState(false);

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    const errors = forgotValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      setLoading(false);
      return;
    }

    setFieldError({});

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    );

    const data = await response.json();
    setLoading(false);

    if (data.error) {
      setFormError(data.message[0].messages[0].message);
    } else {
      setSuccess(true);
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just recieve an emaild
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline />
              {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              initialValue={query.email as string}
              error={fieldError?.email}
              onInputChange={(v) => handleInput('email', v)}
              icon={<Email />}
            />

            <Button type="submit" size="large" disabled={loading} fullWidth>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  );
};

export default FormForgotPassword;
