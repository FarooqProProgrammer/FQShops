import React from 'react'
import ServiceCard from '../../components/ServiceCard/ServiceCard'


export default function Services() {
    const services = [
        {
          icon: <i className="fas fa-shipping-fast"></i>, // Example icon using FontAwesome
          title: 'Fast Shipping',
          description: 'Get your orders delivered quickly and efficiently.',
        },
        {
          icon: <i className="fas fa-money-bill-alt"></i>,
          title: 'Affordable Prices',
          description: 'Enjoy competitive prices on all our products.',
        },
        {
          icon: <i className="fas fa-headphones"></i>,
          title: '24/7 Customer Support',
          description: 'Our support team is ready to assist you around the clock.',
        },
      ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
