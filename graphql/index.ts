import { gql } from "@apollo/client"

//Queries

//Mutations

export const NEW_ACCOUNT = gql`
    mutation newUser($input: UserInput) {
        newUser(input: $input) {
            id
            name
            lastname
            email
        }
    }
`;

export const AUTHENTICATE_USER = gql`
    mutation authenticateUser($input: AuthenticateInput) {
        authenticateUser(input: $input) {
            token
        }
    }
`;