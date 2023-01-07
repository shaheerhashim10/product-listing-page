import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Header from "../components/header/header.component";
import CardGrid from "../components/card-grid/card-grid.component";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export interface IHomeProps {
  launches: string[];
}
const Home: NextPage<IHomeProps> = ({ launches }) => {
  console.log("launches 123", launches);
  const products = [
    {
      id: 1,
      name: "Airpods Pro",
      imageSrc:
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
      imageAlt: "Airpods Pro",
      price: "$235",
      brand: "Apple",
    },
    {
      id: 2,
      name: "Football",
      imageSrc:
        "https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Fifa Worldcup 2022 Football",
      price: "$80",
      brand: "Adidas",
    },
    {
      id: 3,
      name: "Nike Air Jordan",
      imageSrc:
        "https://images.unsplash.com/photo-1593081891731-fda0877988da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      imageAlt: "Nike Air Jordan Sneakers",
      price: "$150",
      brand: "Nike",
    },
    {
      id: 31,
      name: "Beats Headphones",
      imageSrc:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      imageAlt: "Beats Headphones",
      price: "$250",
      brand: "Beats",
    },
    {
      id: 4,
      name: "Lens",
      imageSrc:
        "https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Camera lens",
      price: "$150",
      brand: "Camera",
    },
    {
      id: 5,
      name: "Water bottle",
      imageSrc:
        "https://images.unsplash.com/photo-1614879001283-cfced344a83a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      imageAlt: "Water bottle",
      price: "$35",
      brand: "Beverage",
    },
    {
      id: 6,
      name: "Red Bull",
      imageSrc:
        "https://images.unsplash.com/photo-1640317455707-d83d8d2e938f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      imageAlt: "Red bull",
      price: "$3",
      brand: "Red Bull",
    },
    {
      id: 7,
      name: "Bag",
      imageSrc:
        "https://images.unsplash.com/photo-1545776771-0a6367761ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80",
      imageAlt: "Louis Vuitton",
      price: "$350",
      brand: "Louis Vuitton",
    },
    {
      id: 8,
      name: "Watch",
      imageSrc:
        "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Fossil watch",
      price: "$250",
      brand: "Fossil",
    },
    {
      id: 9,
      name: "Sunglasses",
      imageSrc:
        "https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Rayban Sunglasses",
      price: "$350",
      brand: "RayBan",
    },
    {
      id: 10,
      name: "Pen",
      imageSrc:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      imageAlt: "Parker Pen",
      price: "$35",
      brand: "Parker",
    },
    {
      id: 11,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    // More products...
  ];
  return (
    <div className="md:mx-72">
      <Head>
        <title>Product Listing Page</title>
        <meta
          name="description"
          content="Generated by create next app"
          key="title"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <CardGrid cards={products} />
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `,
  });
  console.log("launch data");
  console.log(data);

  return {
    props: {
      launches: data.launchesPast,
    },
  };
}