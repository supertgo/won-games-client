import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes';
import Joi from 'joi';

const fieldsValidations = {
  username: Joi.string().min(5).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'confirm password doest not match with password'
    })
};

export type FieldErros = {
  [key: string]: string;
};

function getFieldErros(objError: Joi.ValidationResult) {
  const errors: FieldErros = {};

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message;
    });
  }

  return errors;
}

export function signUpValidate(values: UsersPermissionsRegisterInput) {
  const schema = Joi.object(fieldsValidations);

  return getFieldErros(schema.validate(values, { abortEarly: false }));
}

type SingInValues = Omit<UsersPermissionsRegisterInput, 'username'>;

export function signInValidate(values: SingInValues) {
  const { email, password } = fieldsValidations;
  const schema = Joi.object({ email, password });

  return getFieldErros(schema.validate(values, { abortEarly: false }));
}
