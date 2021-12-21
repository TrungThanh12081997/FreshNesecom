import "./assets/css/style.scss";
import { Footer, Header } from "./components";
import HomePage from "./pages/Home/index";

function App() {
  // const icon = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  //   <path d="M9.46658 4.81332L6.72658 7.55332C6.60241 7.67823 6.53271 7.8472 6.53271 8.02332C6.53271 8.19945 6.60241 8.36842 6.72658 8.49332L9.39324 11.16" stroke="#6A983C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
  // </svg>

  return (
    <div className="App">
      {/* <Header />
      <Nav />
      <Slider />
      <BlogPost />
      <Footer /> */}


      <BrowserRouter>

        {/* <ul className="">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/About">About</Link>
          </li>
          <li className="">
            <Link to="/Contact">Contact</Link>
          </li>

        </ul> */}
        <div id="main-content">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/CategoryList" element={<CategoryList />} />
              <Route path="/CategoryGrid" element={<CategoryGrid />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/BlogDetail" element={<BlogDetail />} />
              <Route path="/CheckOut" element={<CheckOut />} />
              <Route path="/Detail" element={<Detail />} />

            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
