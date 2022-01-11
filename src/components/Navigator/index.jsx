import { Link } from "react-router-dom"
import "./style.scss"
const Navigator = () => {
    const navArr = [
        "Home", "CheckOut", "Product", "Login", "Register"
    ]
    return (<div className="container">
        <div className="nav__list">

            {
                navArr.map((nav, index) => {
                    return (

                        <Link key={index} to={`/${nav}`} >{nav}</Link>

                    )
                })
            }
        </div>
    </div>
    )
}
export default Navigator