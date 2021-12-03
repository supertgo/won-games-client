import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/client';
import { useState } from 'react';

import { Email, Lock } from '@styled-icons/material-outlined';

import { FormLink, FormLoading, FormWrapper } from 'components/Form';
import Button from 'components/Button';
import TextField from 'components/TextField';

import * as S from './styles';

const FormSignIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  function handleInput(field: string, value: string) {
    setValues((s) => ({ ...s, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    });

    if (result?.url) {
      return push(result.url);
    }

    setLoading(false);

    console.error('email ou senha invalida');
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" disabled={loading} fullWidth>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
