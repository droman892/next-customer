// import  {  gql  }  from  "apollo-server-micro"; 

// export  const  typeDefs  =  gql`
//     type  User {
//         id: ID
//         login: String
//         avatar_url: String
//     }

//     type  Query {
//         getUsers: [User]
//         getUser(name: String!): User!
//     }`

const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

`;

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const resolvers = {
    Query: {
      books: () => books,
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});