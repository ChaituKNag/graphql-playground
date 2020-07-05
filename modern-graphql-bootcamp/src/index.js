import { GraphQLServer } from "graphql-yoga";

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions
const typeDefs = `
    type Query {
      me: User!
      post: Post!
      greeting(name: String): String!
      add(a: Float!, b: Float!): Float!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      console.log(args);
      if (args.name) {
        return `Hello ${args.name}!`;
      } else {
        return `Hello!`;
      }
    },
    me() {
      return {
        id: "123931",
        name: "Naga",
        email: "naga@example.com",
        age: 31
      };
    },
    post() {
      return {
        id: "abc123",
        title: "This is awesome",
        body: "Lorem ipsum",
        published: true
      };
    },

    add(_, args) {
      if (args.a && args.b) {
        return a + b;
      }
    }
  }
};
const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log("The server is up");
});
