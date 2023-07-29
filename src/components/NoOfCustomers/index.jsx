import React from 'react'
import CountUp from 'react-countup'
import LinenShirts from '../../assets/LinenShirt.png'


export default function NoOfCustomers() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-1 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                        The Perfect Linen Shirt for Summer
                        </h1>
                        <div className="leading-relaxed">
                        This linen shirt is made from 100% linen, making it soft, breathable, and perfect for hot weather.
                        </div>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        {/* <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2> */}
                        <CountUp className="title-font font-medium text-3xl text-gray-900" start={0} end={2000} duration={1} prefix='+' />
                        <p className="leading-relaxed">Customers</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <CountUp className="title-font font-medium text-3xl text-gray-900" start={0} end={10000} duration={1} prefix='+' />

                        <p className="leading-relaxed">Products</p>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img
                        className="object-cover object-center w-full h-full"
                        src={LinenShirts}
                        alt="stats"
                    />
                </div>
            </div>
        </section>

    )
}
