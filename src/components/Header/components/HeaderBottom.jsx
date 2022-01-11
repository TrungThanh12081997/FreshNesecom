import React from "react";
// import "../../assets/img";
import HeaderSearch from "./HeaderSearch";
import "../../Header/header.scss";
import { useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import productService from "../../../services/productService";
import { useDispatch } from "react-redux";
import authService from "../../../services/authService";
export default function HeaderBottom() {


  // const { userInfo } = useSelector(store => store.user);
  // const { stateLogin } = useSelector(store => store.auth);
  // const { productInfo } = useSelector(store => store.product);


  // const handle = async (e) => {
  //   e.preventDefault();
  //   if (stateLogin) {
  //     const res = await productService.getProduct();
  //     dispatch({
  //       type: "PRODUCT",
  //       payload: res.data
  //     })
  // if(!login) return <Navigate to="/Login"/>

  const { login } = useSelector(store => store.auth);

  //   }
  // }
  const dispatch = useDispatch();
  const handleLogout = () => {


    dispatch({
      type: "LOGOUT",
    })

  }
  return (
    <div className="header__bottom">
      {/* {userInfo && <p className="">{userInfo.email}</p>} */}
      {/* <button onClick={handle}>click</button> */}
      {login && <button onClick={handleLogout}>logout</button>}
      <div className="header__logo">
        <Link to="/" href="" className="">
          <svg
            width="100%"
            height="18"
            viewBox="0 0 177 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.87168 10.7609H10.4051V7.23913H3.87168V3.52174H11.857V0H0V17.6087H3.87168V10.7609Z"
              fill="#151515"
            />
            <path
              d="M13.1832 11.0054V17.6087H16.8129V11.0054C16.8129 8.97554 18.4342 7.33696 20.4426 7.33696V4.01087H19.9586C15.9418 4.01087 13.1832 7.1413 13.1832 11.0054Z"
              fill="#151515"
            />
            <path
              d="M28.5574 4.01087C24.5406 4.01087 21.298 7.1413 21.298 11.0054C21.298 14.8696 24.5406 18 28.5574 18C31.7516 18 34.4618 16.019 35.4297 13.2554H31.4128C30.7595 14.1114 29.7189 14.6739 28.5574 14.6739C26.9846 14.6739 25.6779 13.6712 25.1455 12.2772H35.6959C35.7685 11.8614 35.8169 11.4457 35.8169 11.0054C35.8169 7.1413 32.5743 4.01087 28.5574 4.01087ZM25.1455 9.7337C25.6779 8.33967 26.9846 7.33696 28.5574 7.33696C30.1061 7.33696 31.437 8.33967 31.9694 9.7337H25.1455Z"
              fill="#151515"
            />
            <path
              d="M43.7453 9.83152C42.3418 9.66033 40.7447 9.04891 40.7447 8.2663C40.7447 7.38587 41.4949 7.09239 42.2934 7.09239C43.0919 7.09239 43.8421 7.38587 43.8421 8.51087H47.4718C47.4718 5.67391 45.1004 4.01087 42.2934 4.01087C39.4864 4.01087 37.115 5.67391 37.115 8.36413C37.115 10.4429 39.559 12.0082 42.0998 12.3261C43.1887 12.4728 43.9873 13.0353 43.9873 13.6467C43.9873 14.5027 43.0919 14.9185 42.2934 14.9185C41.4949 14.9185 40.5995 14.625 40.5995 13.5H36.9698C36.9698 16.337 39.4864 18 42.2934 18C45.1004 18 47.617 16.337 47.617 13.5C47.617 11.2745 45.6569 10.0516 43.7453 9.83152Z"
              fill="#151515"
            />
            <path
              d="M56.2821 4.01087C55.0722 4.01087 53.9833 4.45109 53.1364 5.18478V0H49.5067V17.6087H53.1364V10.981C53.1364 8.97554 54.2737 7.33696 56.2821 7.33696C58.2906 7.33696 59.4279 8.97554 59.4279 11.0054V17.6087H63.0576V11.0054C63.0576 7.1413 60.299 4.01087 56.2821 4.01087Z"
              fill="#151515"
            />
            <path
              d="M72.0175 4.01087C68.0006 4.01087 65.242 7.1413 65.242 11.0054V17.6087H68.8717V11.0054C68.8717 8.97554 70.009 7.33696 72.0175 7.33696C74.0259 7.33696 75.1632 8.97554 75.1632 11.0054V17.6087H78.7929V11.0054C78.7929 7.1413 76.0343 4.01087 72.0175 4.01087Z"
              fill="#151515"
            />
            <path
              d="M87.6346 4.01087C83.6178 4.01087 80.3752 7.1413 80.3752 11.0054C80.3752 14.8696 83.6178 18 87.6346 18C90.8288 18 93.539 16.019 94.5069 13.2554H90.49C89.8367 14.1114 88.7962 14.6739 87.6346 14.6739C86.0618 14.6739 84.7551 13.6712 84.2227 12.2772H94.7731C94.8457 11.8614 94.8941 11.4457 94.8941 11.0054C94.8941 7.1413 91.6515 4.01087 87.6346 4.01087ZM84.2227 9.7337C84.7551 8.33967 86.0618 7.33696 87.6346 7.33696C89.1833 7.33696 90.5142 8.33967 91.0466 9.7337H84.2227Z"
              fill="#151515"
            />
            <path
              d="M102.822 9.83152C101.419 9.66033 99.8219 9.04891 99.8219 8.2663C99.8219 7.38587 100.572 7.09239 101.371 7.09239C102.169 7.09239 102.919 7.38587 102.919 8.51087H106.549C106.549 5.67391 104.178 4.01087 101.371 4.01087C98.5636 4.01087 96.1922 5.67391 96.1922 8.36413C96.1922 10.4429 98.6362 12.0082 101.177 12.3261C102.266 12.4728 103.064 13.0353 103.064 13.6467C103.064 14.5027 102.169 14.9185 101.371 14.9185C100.572 14.9185 99.6768 14.625 99.6768 13.5H96.047C96.047 16.337 98.5636 18 101.371 18C104.178 18 106.694 16.337 106.694 13.5C106.694 11.2745 104.734 10.0516 102.822 9.83152Z"
              fill="#151515"
            />
            <path
              d="M115.117 4.01087C111.1 4.01087 107.858 7.1413 107.858 11.0054C107.858 14.8696 111.1 18 115.117 18C118.311 18 121.022 16.019 121.99 13.2554H117.973C117.319 14.1114 116.279 14.6739 115.117 14.6739C113.544 14.6739 112.238 13.6712 111.705 12.2772H122.256C122.328 11.8614 122.377 11.4457 122.377 11.0054C122.377 7.1413 119.134 4.01087 115.117 4.01087ZM111.705 9.7337C112.238 8.33967 113.544 7.33696 115.117 7.33696C116.666 7.33696 117.997 8.33967 118.529 9.7337H111.705Z"
              fill="#151515"
            />
            <path
              d="M130.596 7.33696C131.999 7.33696 133.185 8.11957 133.814 9.29348H137.637C136.839 6.26087 133.983 4.01087 130.596 4.01087C126.579 4.01087 123.336 7.1413 123.336 11.0054C123.336 14.8696 126.579 18 130.596 18C133.959 18 136.766 15.7989 137.589 12.8152H133.693C133.088 13.9158 131.951 14.6739 130.596 14.6739C128.587 14.6739 126.966 13.0353 126.966 11.0054C126.966 8.97554 128.587 7.33696 130.596 7.33696Z"
              fill="#151515"
            />
            <path
              d="M152.929 11.0054C152.929 7.1413 149.711 4.01087 145.718 4.01087C141.726 4.01087 138.507 7.1413 138.507 11.0054C138.507 14.8696 141.726 18 145.718 18C149.711 18 152.929 14.8696 152.929 11.0054ZM149.3 11.0054C149.3 13.0353 147.702 14.6739 145.718 14.6739C143.734 14.6739 142.137 13.0353 142.137 11.0054C142.137 8.97554 143.734 7.33696 145.718 7.33696C147.702 7.33696 149.3 8.97554 149.3 11.0054Z"
              fill="#151515"
            />
            <path
              d="M170.467 4.01087C168.579 4.01087 166.885 4.86685 165.748 6.23641C164.611 4.86685 162.917 4.01087 161.029 4.01087C157.012 4.01087 154.496 7.1413 154.496 11.0054V17.6087H158.126V11.0054C158.126 8.97554 159.021 7.33696 161.029 7.33696C163.038 7.33696 163.933 8.97554 163.933 11.0054V17.6087H167.563V11.0054C167.563 8.97554 168.458 7.33696 170.467 7.33696C172.475 7.33696 173.37 8.97554 173.37 11.0054V17.6087H177V11.0054C177 7.1413 174.483 4.01087 170.467 4.01087Z"
              fill="#151515"
            />
          </svg>
        </Link >
      </div>
      <HeaderSearch />
      <div className="header__right">
        <div className="header__right-item">
          <Link to="/Login">

            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 21.9999L2.79 19.1199C5.4 9.6199 16.6 9.6199 19.21 19.1199L20 21.9999"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11.98C13.7614 11.98 16 9.74141 16 6.97998C16 4.21856 13.7614 1.97998 11 1.97998C8.23858 1.97998 6 4.21856 6 6.97998C6 9.74141 8.23858 11.98 11 11.98Z"
                stroke="#151515"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
              />
            </svg>
          </Link>
        </div>
        <Link to="/" href="#" className="header__right-item cart">
          <svg
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8896 19.8499H6.10955C5.79187 19.8501 5.48326 19.7439 5.23309 19.5481C4.98291 19.3523 4.80562 19.0783 4.72955 18.7699L2.07955 8.15986C2.05369 8.05657 2.05174 7.94874 2.07383 7.84458C2.09593 7.74042 2.1415 7.64267 2.20707 7.55878C2.27264 7.47489 2.35649 7.40706 2.45223 7.36046C2.54797 7.31386 2.65307 7.28971 2.75955 7.28986H21.2396C21.346 7.28971 21.4511 7.31386 21.5469 7.36046C21.6426 7.40706 21.7265 7.47489 21.792 7.55878C21.8576 7.64267 21.9032 7.74042 21.9253 7.84458C21.9474 7.94874 21.9454 8.05657 21.9196 8.15986L19.2696 18.7699C19.1935 19.0783 19.0162 19.3523 18.766 19.5481C18.5158 19.7439 18.2072 19.8501 17.8896 19.8499V19.8499Z"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.79941 2.14993L6.89941 7.28993"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.8799 2.14993L16.7899 7.28993"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="cart__noti">4</div>
        </Link >
      </div>
    </div>
  );
}
