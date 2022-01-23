import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";

import MainLayout from "./layout/MainLayout";

import { Provider } from "react-redux"
import store from "./store";
import { AuthProvider } from "./context/AuthContext";
import { createContext } from "react";
import HomePage from "./pages/Home";

function App() {

  const AuthContext = createContext()
  return (
    <>
      <div className="App">
        <Provider
          store={store}
        >
          <AuthProvider >
            <BrowserRouter>

              <div id="main-content">
                <Routes>
                  <Route path="/" element={<MainLayout />}>
                    <Route index path="/" element={<HomePage />} />
                    {/* <Route path="/CheckOut" element={<CheckOut />} />

                    <Route path="/Product" element={<Product />} />

                    <Route path="*" element={<NotFound />} /> */}
                  </Route>
                  {/* <Route path="/Login" element={<Login />} />
                  <Route path="/Register" element={<RegisterForm />} /> */}
                </Routes>
              </div>
            </BrowserRouter>
          </AuthProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
