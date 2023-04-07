import { gql } from "@apollo/client"

const ADD_COMMENT = gql`
    mutation Mutation($contactInput: ContactInput) {
        createContact(contactInput: $contactInput) {
            comment
            createdAt
            email
            name
        }
    }
`

// const DELETE_CLIENT = gql`
//   mutation deleteClient($id: ID!) {
//     deleteClient(id: $id) {
//       id
//       name
//       email
//       phone
//     }
//   }
// `;

export { ADD_COMMENT }
