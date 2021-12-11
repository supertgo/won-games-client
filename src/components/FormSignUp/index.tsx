import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/client';
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined';

import { FormWrapper, FormLink, FormLoading, FormError } from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import { useMutation } from '@apollo/client';
import { MutationRegister } from 'graphql/mutations/register';
import { FieldErros, signUpValidate } from 'utils/validations';

const FormSignUp = () => {
  const [formError, setFormError] = useState('');
  const [fieldError, setFieldError] = useState<FieldErros>({});

  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  });

  const [createUser, { error, loading }] = useMutation(MutationRegister, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.data.message[0].messages[0]
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        });
    }
  });

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const errors = signUpValidate(values);

    if (Object.keys(errors).length) {
      setFieldError(errors);
      return;
    }

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    });
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" disabled={loading} fullWidth>
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
