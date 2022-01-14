import React from 'react'
import { Link } from 'react-router-dom'
// import "../../assets/template/css/stylelibs.min.css"
export default function NotFound() {
    return (
        <>
            <section class="py-12">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">


                            <div class="mb-7 font-size-h1">🙁</div>


                            <h2 class="mb-5">404. Page not found.</h2>


                            <p class="mb-7 text-gray-500">
                                Sorry, we couldn't find the page you where looking for.
                                We suggest that you return to home page.
                            </p>


                            <Link class="btn btn-dark" to="/">
                                Go to Homepage
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
