import {
  forgotValidate,
  resetValidate,
  signInValidate,
  signUpValidate
} from './';

describe('validations', () => {
  describe('signInValidate', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' };
      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      });
    });

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email', password: '1234' };
      expect(signInValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      );
    });
  });

  describe('signUpValidate', () => {
    it('should validate empty fileds ', () => {
      const values = { username: '', email: '', password: '' };
      expect(signUpValidate(values)).toMatchObject({
        email: expect.any(String),
        username: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      });
    });

    it('should return short username error', () => {
      const values = { username: 'adw', email: '', password: '' };
      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      );
    });

    it('should return a email error', () => {
      const values = { username: 'adw', email: 'invalid-email', password: '' };
      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      );
    });

    it('should return errori f password doest not match with confirmed password', () => {
      const values = {
        username: 'rogerio',
        email: 'rogerio@gmail.com',
        password: '1234',
        confirm_password: '4321'
      };
      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      );
    });
  });

  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '' };
      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      });
    });

    it('should return invalid email error', () => {
      const values = { email: 'invalid-email' };
      expect(forgotValidate(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" must be a valid email",
        }
      `);
    });
  });

  describe('resetValidadte()', () => {
    it('should validate empty fileds ', () => {
      const values = { password: '', confirm_password: '' };
      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String)
      });
    });

    it('should validate confirm  password', () => {
      const values = { password: '123', confirm_password: '' };
      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"\\"confirm_password\\" is not allowed to be empty"`
      );
    });

    it('should  confirm  password when different', () => {
      const values = { password: '123', confirm_password: '321' };
      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      );
    });
  });
});
