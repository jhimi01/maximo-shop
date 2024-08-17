"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { marcellus, inter } from "../app/fonts";
import Slider from "react-slick";

const NewProducts = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For tablets and small desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // autoplay: false,
          speed: 1000,
        }
      }
    ]
  };

  const productsData = [
    {
      id: 1,
      img: "/products/products7.png",
      title: "Product One",
      desc: "This is a description for Product One. It's a high-quality item that meets all your needs.",
      ratings: 4.5,
      price: 29.99,
    },
    {
      id: 2,
      img: "/products/products2.png",
      title: "Product Two",
      desc: "Product Two offers great value and excellent performance. Ideal for daily use.",
      ratings: 4.0,
      price: 19.99,
    },
    {
      id: 3,
      img: "/products/products6.png",
      title: "Product Three",
      desc: "Experience top-notch quality with Product Three. Perfect for those who seek premium features.",
      ratings: 4.8,
      price: 49.99,
    },
    {
      id: 4,
      img: "/products/products4.png",
      title: "Product Four",
      desc: "Product Four is a versatile and durable option that offers great functionality at a competitive price.",
      ratings: 4.2,
      price: 39.99,
    },
    {
      id: 5,
      img: "/products/products5.png",
      title: "Product Five",
      desc: "Product Five is designed for efficiency and convenience, making it a great addition to your collection.",
      ratings: 4.3,
      price: 24.99,
    },
    {
      id: 6,
      img: "/products/products3.png",
      title: "Product Six",
      desc: "With Product Six, enjoy premium quality and exceptional performance at an affordable price.",
      ratings: 4.7,
      price: 59.99,
    },
    {
      id: 7,
      img: "/products/products1.png",
      title: "Product Seven",
      desc: "Product Seven stands out with its innovative features and sleek design, perfect for modern needs.",
      ratings: 4.6,
      price: 34.99,
    },
  ];



  return (
    <div>
      <div className="container py-20">
        <h3 className={`font-medium text-center text-blackish ${marcellus.className}`}>
        Popular Products
        </h3>
        <h2 className={`font-medium text-center text-4xl pb-4 ${marcellus.className}`}>
          New Products
        </h2>
        <div >
        <Slider {...settings}>

          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              ratings={item.ratings}
              price={item.price}
            ></ProductCard>
          ))}
        </Slider>
        <div className="flex items-center justify-center">

        <button className="bg-accent text-white cursor-pointer  hover:bg-[#333] p-2 px-4 text-[14px]  md:text-[16px] mt-6">
            Shop Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
