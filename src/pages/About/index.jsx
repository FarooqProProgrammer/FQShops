import React from 'react'
import Hero from "../../assets/c-d-x-PDX_a_82obo-unsplash.jpg"

export default function About() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={Hero}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-12">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              Welcome to [Your Ecommerce Website Name], your one-stop shop for
              all things [Product Category or Niche]. We're dedicated to giving
              you the very best of [Product Type], with a focus on quality,
              uniqueness, and customer satisfaction.
            </p>
            <p className="text-gray-700 mb-6">
              Founded in [Year], [Your Ecommerce Website Name] has come a long
              way from its beginnings in [Location]. When [Founder's Name]
              first started out, their passion for [Product Niche] drove them to
              start their own business.
            </p>
            <p className="text-gray-700 mb-6">
              We hope you enjoy our products as much as we enjoy offering them
              to you. If you have any questions or comments, please don't
              hesitate to contact us.
            </p>
            <p className="text-gray-700">
              Sincerely,
              <br />
              The FQshops Team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
