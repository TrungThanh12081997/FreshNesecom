// import React, { useEffect, useState } from 'react'
// import productService from '../../services/productService'

// export default function Product() {
//     const [fetching, setFetching] = useState(true)
//     const [products, setProducts] = useState()
//     useEffect(() => {
//         (async () => {
//             setFetching(true)
//             const res = await productService.getProduct()
//             setProducts(res.data)
//             setFetching(false)
//         })()

//     }, [])
//     if (fetching) return "..loading"
//     return (
//         <div>
//             product
//         </div>
//     )
// }
