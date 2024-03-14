import React from 'react'

export const metadata = {
    title: 'All Product',
    description: "All Product Page"
}

const getData = async () => {
    return new Promise(async (res, rej) => {
        const result = await fetch('https://dummyjson.com/products')

        if (result.ok) {
            const data = await result.json();
            res(data.products)
            console.log(data.products);
        }
    })
}

export default async function AllProductPage() {
    const data = await getData();
    if (!data) {
        console.log('data nhi mila...');
    }
    return (
        <div>
            <h1>All Product Page...</h1><br />
            {
                data.map(singleData => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                            <div style={{ border: '2px solid black', padding: '7px', margin: '15px' }}>
                                <img style={{ width: '300px' }} src={singleData.thumbnail} alt="" />
                                <h2>{singleData.title}</h2>
                                <h3>$ {singleData.price}</h3>
                                <p>{singleData.description}</p><hr />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
