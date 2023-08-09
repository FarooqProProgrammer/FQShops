import React from 'react'
import HeroImg from "../../assets/c-d-x-PDX_a_82obo-unsplash.jpg"

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Welcome to Our Online Store
          </h1>
          <p className="mb-8 leading-relaxed">
          Discover amazing deals on your favorite products.
          Shop the latest trends and find your style.Enjoy hassle-free shopping and fast delivery.
          Elevate your wardrobe with our premium collections  

          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Shop Now            </button>
           
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            style={{ maxWidth: "400px", height: "auto" }}
            alt="hero"
            src={HeroImg}
          />
        </div>
      </div>
    </section>

  )
}
