import { gql } from "@apollo/client"

//Queries

export const GET_USER = gql`
    query getUser {
        getUser {
            id
            name
            lastname
        }
    }
`;

export const GET_CLIENTS_FROM_USER = gql`
    query getClientsSeller {
        getClientsSeller {
            id
            name
            lastname
            company
            email
        }
    }
`;

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

export const NEW_CLIENT = gql`
    mutation newClient($input: ClientInput) {
        newClient(input: $input) {
            id
            name
            lastname
            company
            email
            phone
        }
    }
`;

export const DELETE_CLIENT = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id:$id)
    }
`;