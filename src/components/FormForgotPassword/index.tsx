import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { useState } from 'react';

import { Email, ErrorOutline } from '@styled-icons/material-outlined';

import { FormError, FormLoading, FormWrapper } from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';

import { FieldErros, forgotValidate } from 'utils/validations';

const FormForgotPassword = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErros>({
    email: '',
    password: ''
  });

  const [values, setValues] = useState({
    email: ''
  });

  const [loading, setLoading] = useState(false);

  const routes = useRouter();
  const { push, query } = routes;

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

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    });

    if (result?.url) {
      return push(result.url);
    }

    setLoading(false);

    setFormError('username or password is invalid');
  }

  return (
    <FormWrapper>
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
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <Button type="submit" size="large" disabled={loading} fullWidth>
          {loading ? <FormLoading /> : <span>Send email</span>}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormForgotPassword;
