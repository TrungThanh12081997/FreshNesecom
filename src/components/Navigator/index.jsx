import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GreenRight } from "..";
import { stateLoginSelector } from "../../store/authenReducer";
import { logoutAction } from "../../store/rootSaga";
import Button from "../Button";
import "./style.scss";
const Navigator = () => {
  const navArr = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/CheckOut",
      text: "Check Out",
    },
    {
      url: "/Register",
      text: "Register",
    },
    {
      url: "/Login",
      text: "Login",
    },
    {
      url: "/Product",
      text: "Product",
    },
  ];
  const dispatch = useDispatch();
  const { stateLogin } = useSelector((store) => store.auth);
  console.log(stateLogin);
  const handleLogout = () => {
    dispatch({
      type: logoutAction.type,
    });
  };

  return (
    <div className="container">
      <div className="nav__list">
        {navArr.map((nav, index) => {
          const { url, text } = nav;
          return (
            <Link key={index} to={url}>
              {text}
            </Link>
          );
        })}
        {stateLogin && (
          <Button
            onClick={handleLogout}
            children="Log Out"
            icon={<GreenRight />}
            type="icon-right"
            background="white"
            border="bold"
            color="black"
            size="small"
          />
        )}
      </div>
    </div>
  );
};
export default Navigator;
