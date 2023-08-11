import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = useState(0);




  const ProductFetch = async () => {
    // await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=20`).then((res) => {
    await axios.get(`https://fakestoreapi.com/products`).then((res) => {
      console.log(res.data)
      setProducts(res.data)
    })
  }

  useEffect(() => {
    ProductFetch()
  }, [])


  useEffect(() => {
    ProductFetch()
  }, [page])
  

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-1 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              products.map((item) => {
                return (
                  <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.image}
                      />
                    </Link>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1">{item.price}</p>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>
      </section>
      <div className="w-full py-2 flex justify-center items-center">
        <Pagination count={10} variant="outlined" shape="rounded" onChange={(event, value) => setPage(value)} />
      </div>
    </>
  )
}
