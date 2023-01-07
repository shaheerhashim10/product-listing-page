import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import Header from "../components/header/header.component";
import CardGrid from "../components/card-grid/card-grid.component";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 31,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 6,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 7,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 8,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 9,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
    },
    {
      id: 10,
      name: "Basic Tee",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      brand: "Black",
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
