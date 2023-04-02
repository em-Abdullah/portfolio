const {gql} = require('apollo-server');

module.exports = gql
`
type Contact{
    name: String
    email: String
    comment: String
    createdAt: String
}
input ContactInput {
    name: String
    email: String
    comment: String
}

type Query {
    Contact(ID: ID!): Contact!
    getContact: [Contact]
    
}

type Mutation {
   createContact(contactInput: ContactInput): Contact!
   deleteContact(ID: ID!): Boolean
   editContact(ID: ID!, ContactInput: ContactInput):Boolean
}

`
