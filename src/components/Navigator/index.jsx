import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { GreenRight } from "..";
import Button from "../Button";
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
            url: "/Register",
            text: "Register"
        },
        {
            url: "/Login",
            text: "Login"
        },


    ]
    const dispatch = useDispatch()
    const { login } = useSelector(store => store.auth);

    const handleLogout = () => {


        dispatch({
            type: "LOGOUT",
        })

    }
    console.log(login)
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
            {
                login && <Button onClick={handleLogout}
                    children="Log Out" icon={<GreenRight />} type="icon-right" background="white" border="bold"
                    color="black" size="small" />
            }
        </div>
    </div>
    )
}
export default Navigator