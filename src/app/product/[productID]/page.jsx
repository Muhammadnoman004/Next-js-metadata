import React from 'react'

export const generateMetadata = async ({ params }) => {
    const title = await new Promise((res) => {
        setTimeout(() => {
            res(`iphone ${params.productID}`)
        }, 1000);
    })
    return {
        title: `product ${title}`
    }
}

export default function SingleProductPage({params}) {

    return (
        <div>
            <h1>Single Product Page...</h1>
            <h3>Product {params.productID} detail page.</h3>
        </div>
    )
}
