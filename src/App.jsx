import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";
import { Footer, Header, Nav } from "./components";
import BlogPost from "./components/BlogPost";
import Slider from "./components/Slider";
import MainLayout from "./layout/MainLayout";
import CheckOut from "./pages/Checkout";
import HomePage from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux"
import store from "./store";
function App() {
  // const icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M9.46658 4.81332L6.72658 7.55332C6.60241 7.67823 6.53271 7.8472 6.53271 8.02332C6.53271 8.19945 6.60241 8.36842 6.72658 8.49332L9.39324 11.16" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
  // </svg>

  return (
    <>
      <div className="App">

        <Provider
          store={store}
        >
          <BrowserRouter>
            {/* <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link> */}
            <div id="main-content">
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/CheckOut" element={<CheckOut />} />
                  {/* <Route path="/CategoryList" element={<CategoryList />} />
              <Route path="/CategoryGrid" element={<CategoryGrid />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/BlogDetail" element={<BlogDetail />} />
              <Route path="/CheckOut" element={<CheckOut />} />/
              <Route path="/Detail" element={<Detail />} /> */}
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
