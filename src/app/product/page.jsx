import React from 'react'

export const metadata = {
    title: 'All Product',
    description: "All Product Page"
}

const getData = async () => {
    return new Promise(async (res, rej) => {
        const Api = await fetch('https://dummyjson.com/products')

        if (Api.ok) {
            const data = await Api.json();
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
                        <div>
                            <div key={singleData.id} className='ProductDiv'>
                                <img id='AllProductImg' src={singleData.thumbnail} alt="" />
                                <h2 id='AllProductTitle'>{singleData.title}</h2>
                                <h3 id='AllProductPrice'>$ {singleData.price}</h3>
                                <p id='AllProductDes'>{singleData.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
