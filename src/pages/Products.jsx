import React from 'react'
import { useFetch } from '../hooks/UseFetch'
import Product from '../components/Product'
import { HashLoader } from 'react-spinners'

const Products = () => {

    let url = 'https://dummyjson.com/products'
    let { data, error, isPending } = useFetch(url)
    return (
        <div>
            {error && <h2 className='error'>{error}</h2>}
            {isPending && <div className="flex justify-center items-center h-64">
                <HashLoader size={100} color="#36d7b7" /></div>
            }

            {data && <Product product={data} />}
        </div>
    )
}

export default Products