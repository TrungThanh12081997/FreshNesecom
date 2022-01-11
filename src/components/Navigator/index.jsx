import { Link } from "react-router-dom"
import "./style.scss"
const Navigator = () => {
    const navArr = [
        {
            url: "/",
            text: "Home"
        },
        {
            url: "/CheckOut",
            text: "Check Out"
        },
        {
            url: "/Product",
            text: "Product"
        },
        {
            url: "/Login",
            text: "Login"
        },


    ]
    return (<div className="container">
        <div className="nav__list">

            {
                navArr.map((nav, index) => {
                    const { url, text } = nav
                    return (

                        <Link key={index} to={url} >{text}</Link>

                    )
                })
            }
        </div>
    </div>
    )
}
export default Navigator