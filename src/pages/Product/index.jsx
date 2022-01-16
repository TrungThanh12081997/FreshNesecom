import React, { useEffect, useState } from 'react'
import { IconStar, Nav } from '../../components'
import Navigator from '../../components/Navigator'
import productService from '../../services/productService'

export default function Product() {
    const [fetching, setFetching] = useState(true)
    const [products, setProducts] = useState()
    useEffect(() => {
        (async () => {
            setFetching(true)
            const res = await productService.getProduct()
            setProducts(res.data)
            setFetching(false)
        })()

    }, [])
    if (fetching) return "..loading"

    return (
        <>
            {/* <Nav /> */}
            <section className='view'>
                <div className="viet__top">

                </div>
                <div className="view__middle">
                    <form className="view__middle-left">
                        <div className="form__introduce">
                            <h2 className="form__introduce-title">
                                Categories
                            </h2>
                            <p className="form__introduce-item">Category</p>
                            <p className="form__introduce-item">Category</p>
                            <p className="form__introduce-item">Category</p>
                            <p className="form__introduce-item">Category</p>

                        </div>
                        <div className="form__introduce">
                            <h2 className="form__introduce-title">
                                Brand
                            </h2>
                            <p className="form__introduce-item">
                                <input type="checkbox" className="" />
                                Filtre by brand item
                            </p>
                            <p className="form__introduce-item">
                                <input type="checkbox" className="" />
                                Filtre by brand item
                            </p>
                            <p className="form__introduce-item">
                                <input type="checkbox" className="" />
                                Filtre by brand item
                            </p>
                            <p className="form__introduce-item">
                                <input type="checkbox" className="" />
                                Filtre by brand item
                            </p>
                            <p className="form__introduce-item">
                                <input type="checkbox" className="" />
                                Filtre by brand item
                            </p>

                        </div>
                        <div className="form__introduce">
                            <h2 className="form__introduce-title">
                                Rating
                            </h2>
                            <div className="rating__level">
                                <p className="rating__level-item">
                                    <input type="checkbox" className="" />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />

                                </p>
                                <p className="rating__level-item">
                                    <input type="checkbox" className="" />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />


                                </p>
                                <p className="rating__level-item">
                                    <input type="checkbox" className="" />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />


                                </p>
                                <p className="rating__level-item">
                                    <input type="checkbox" className="" />
                                    <IconStar />
                                    <IconStar />


                                </p>
                                <p className="rating__level-item">
                                    <input type="checkbox" className="" />
                                    <IconStar />


                                </p>
                            </div>
                        </div>
                        <div className="form__introduce">
                            <h2 className="form__introduce-title">
                                Price
                            </h2>



                        </div >



                    </form>
                    <div className="view__middle-right">

                    </div>
                </div>

            </section>
        </>
    )
}
