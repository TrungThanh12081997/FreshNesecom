import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'
import Button from "../../components/Button"

export default function MainLayout(children) {
    return (
        <>
            {/* <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul> */}

            <Outlet />


        </>
    )
}
