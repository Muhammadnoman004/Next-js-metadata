import React from 'react'

export const metadata = {
    title: 'All Product',
    description: "All Product Page"
}

export default function AllProductPage() {

    const getData = async () => {
        const Alldata = await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => console.log(res));
    }
    getData()
    return (
        <div>
            <h1>All Product Page...</h1>
            <h3></h3>
        </div>
    )
}
