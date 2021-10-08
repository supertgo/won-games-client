import Button from 'components/Button';
import Heading from 'components/Heading';
import TextField from 'components/TextField';
import * as S from './styles';

const FormProfile = () => (
  <S.Wrapper>
    <Heading size="small" color="black" lineBottom lineColor="primary">
      My Profile
    </Heading>

    <S.Form>
      <TextField
        name="name"
        placeholder="Name"
        label="Name"
        initialValue="John Cage"
      />

      <TextField
        name="email"
        type="email"
        label="E-mail"
        placeholder="E-mail"
        initialValue="johncage@email.com"
        disabled
      />

      <TextField
        name="passowrd"
        type="password"
        label="Password"
        placeholder="Type your password"
      />

      <TextField
        name="new_password"
        type="password"
        label="New Password"
        placeholder="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
);

export default FormProfile;
