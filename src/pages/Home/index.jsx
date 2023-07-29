import React from 'react'
import Hero from '../../components/Hero'
import Products from '../../components/Products'
import NoOfCustomers from '../../components/NoOfCustomers'
import Testimonial from '../../components/Testimonial'
import Cta from '../../components/Cta'

export default function Header() {
  return (
    <div>
        <Hero />
        <Products />
        <NoOfCustomers />
        <Testimonial />
        <Cta />
    </div>
  )
}
