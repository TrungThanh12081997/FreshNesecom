import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";
import { Footer, Header, Nav } from "./components";
import BlogPost from "./components/BlogPost";
import Slider from "./components/Slider";
import MainLayout from "./layout/MainLayout";
import CheckOut from "./pages/Checkout";
import HomePage from "./pages/Home/index";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./context/AuthContext";
import { createContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterForm from "./pages/Register";
import { message } from "antd";
import Product from "./pages/Product";
// import Product from "./pages/Product";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function App() {
  message.config({
    top: 100,
    duration: 1.5,
    rtl: false,
  });
  const AuthContext = createContext();
  const queryClient = new QueryClient()

  return (
    <>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthProvider>
              <BrowserRouter>
                <div id="main-content">
                  <Routes>
                    <Route path="/" element={<MainLayout />}>
                      <Route index path="/" element={<HomePage />} />
                      <Route path="/CheckOut" element={<CheckOut />} />

                      <Route path="/Product" element={<Product />} />

                      <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<RegisterForm />} />
                  </Routes>
                </div>
              </BrowserRouter>
            </AuthProvider>
          </Provider>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
