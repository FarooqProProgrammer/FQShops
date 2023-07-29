import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([]);



    const ProductFetch = async () => {
        await axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
    }

    useEffect(() => {
        ProductFetch()
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-1 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        products.map((item) => {
                            return (
                                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a className="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            className="object-cover object-center w-full h-full block"
                                            src={item.image}
                                        />
                                    </a>
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

    )
}
