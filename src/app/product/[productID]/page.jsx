import React from 'react'
import { notFound } from 'next/navigation';

const SingleProduct = (id) => {
    return new Promise(async (res, rej) => {
        const getSingleData = await fetch(`https://dummyjson.com/products/${id}`);

        if (getSingleData.ok) {
            const data = await getSingleData.json();
            res(data);
        }
    })

}

export const generateMetadata = async ({ params }) => {
    const data = await SingleProduct(params.productID);
    console.log(data);
    if (!data) {
        return notFound()
    }
    return {
        title: `product ${data.title}`,
        description: `${data.description}`
    }
}


export default async function SingleProductPage({ params }) {
    const SingleData = await SingleProduct(params.productID)
    return (
        <div>
            <h1>Single Product Page...</h1>
            <h2>Product {params.productID} detail page.</h2>
            <div>
                <img src={SingleData.thumbnail} alt="" />
            </div>
        </div>
    )
}
