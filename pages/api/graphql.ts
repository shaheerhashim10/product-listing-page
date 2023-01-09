import { ApolloServer, gql } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Define the GraphQL schema for the products data
const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    imageSrc: String!
    imageAlt: String!
    price: Int!
    brand: String!
  }

  type Query {
    getProducts: [Product]!
    sortProductsByPrice(sortType: String!): [Product]!
  }
`;
const products = [
  {
    id: 1,
    name: "Airpods Pro",
    imageSrc:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
    imageAlt: "Airpods Pro",
    price: 235,
    brand: "Apple",
  },
  {
    id: 2,
    name: "Football",
    imageSrc:
      "https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Fifa Worldcup 2022 Football",
    price: 80,
    brand: "Adidas",
  },
  {
    id: 3,
    name: "Nike Air Jordan",
    imageSrc:
      "https://images.unsplash.com/photo-1593081891731-fda0877988da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Nike Air Jordan Sneakers",
    price: 150,
    brand: "Nike",
  },
  {
    id: 31,
    name: "Beats Headphones",
    imageSrc:
      "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    imageAlt: "Beats Headphones",
    price: 250,
    brand: "Beats",
  },
  {
    id: 4,
    name: "Lens",
    imageSrc:
      "https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Camera lens",
    price: 150,
    brand: "Camera",
  },
  {
    id: 5,
    name: "Water bottle",
    imageSrc:
      "https://images.unsplash.com/photo-1614879001283-cfced344a83a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Water bottle",
    price: 35,
    brand: "Beverage",
  },
  {
    id: 6,
    name: "Red Bull",
    imageSrc:
      "https://images.unsplash.com/photo-1640317455707-d83d8d2e938f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    imageAlt: "Red bull",
    price: 3,
    brand: "Red Bull",
  },
  {
    id: 7,
    name: "Bag",
    imageSrc:
      "https://images.unsplash.com/photo-1545776771-0a6367761ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
    imageAlt: "Louis Vuitton",
    price: 350,
    brand: "Louis Vuitton",
  },
  {
    id: 8,
    name: "Watch",
    imageSrc:
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Fossil watch",
    price: 250,
    brand: "Fossil",
  },
  {
    id: 9,
    name: "Sunglasses",
    imageSrc:
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Rayban Sunglasses",
    price: 350,
    brand: "RayBan",
  },
  {
    id: 10,
    name: "Pen",
    imageSrc:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Parker Pen",
    price: 35,
    brand: "Parker",
  },
  {
    id: 11,
    name: "Basic Tee",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    brand: "Black",
  },
  // More products...
];

// Define the resolvers for the products data
const resolvers = {
  Query: {
    getProducts: () => {
      try {
        // Return the array of products
        return products;
      } catch (error) {
        throw error;
      }
    },
    sortProductsByPrice: (root: any, { sortType }: any) => {
      // sort the list of products based on the value of sortType here
      if (sortType === "DSC") {
        // sort high to low
        return products.sort((a: any, b: any) => b.price - a.price);
      } else if (sortType === "ASC") {
        // sort low to high
        return products.sort((a: any, b: any) => a.price - b.price);
      }
      return products;
    },
  },
};

// Create the Apollo Server instance
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
const startServer = apolloServer.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
