import { gql } from '@apollo/client';

export const MutationRegister = gql`
  mutation MutationRegister($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
    }
  }
`;
