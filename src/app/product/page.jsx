import React from 'react'

export const metadata = {
    title: 'All Product',
    description: "All Product Page"
}

export default function AllProductPage() {
    let data;
    const getData = async () => {
        const Alldata = await fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                data = res
                console.log(data);
            });
    }
    getData()
    return (
        <div>
            <h1>All Product Page...</h1>
            {
                data.map((singleData) => {
                    return(
                        <h2>{singleData}</h2>
                    )
                })
            }
        </div>
    )
}
