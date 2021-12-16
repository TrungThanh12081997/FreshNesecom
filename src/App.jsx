import { Footer, Header, Nav, Category, Button } from "./components";
import "./assets/css/style.scss";
import Home from "./pages/Home"
import About from "./pages/About"

import NotFound from "./pages/NotFound";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  Link,
  Outlet,
} from 'react-router-dom'
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
function App() {
  // const icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M9.46658 4.81332L6.72658 7.55332C6.60241 7.67823 6.53271 7.8472 6.53271 8.02332C6.53271 8.19945 6.60241 8.36842 6.72658 8.49332L9.39324 11.16" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
  // </svg>
  return (
    <div className="App">


      <BrowserRouter>
        <ul className="">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/About">About</Link>
          </li>
          <li className="">
            <Link to="/Contact">Contact</Link>
          </li>

        </ul>
        <main id="main-content">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />

            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </BrowserRouter>
    </div>
  );
}

export default App;
