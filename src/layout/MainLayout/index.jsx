import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'
import Button from "../../components/Button"

export default function MainLayout(children) {
    return (
        <>
            <Header />
            <div id="main-content">

                <Outlet />
            </div>
            <Footer />


        </>
    )
}
