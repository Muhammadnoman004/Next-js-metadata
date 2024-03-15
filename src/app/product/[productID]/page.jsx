import React from 'react'
import '../../product.css'
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
            <h1 id='singleProHead'>...Single Product Page...</h1>
            <h2 id='ProductID'>Product <mark>{SingleData.id}</mark> detail page.</h2>
            <div className='SingleProductDiv'>
                <img id='ProductImg' src={SingleData.thumbnail} alt="" />
                <h3 id='ProductTitle'>{SingleData.title}</h3>
                <h4 id='ProductPrice'><span>Price : </span>$ {SingleData.price}</h4>
                <h4 id='ProductBrand'><span>Brand : </span>{SingleData.brand}</h4>
                <p id='ProductDes'><span>Description : </span>{SingleData.description}</p>
            </div>
        </div>
    )
}
