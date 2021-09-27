import Auth from 'templates/Auth';
import FormSignIn from 'components/FormSignIn';

export default function signIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  );
}
