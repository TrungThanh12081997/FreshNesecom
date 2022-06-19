
import React, { Suspense, useEffect } from "react";
import AOS from "aos";
import "assets/css/style.scss";
import "aos/dist/aos.css";

import "swiper/scss";
import Loading from "components/Loading/Loading";


const HomePage = React.lazy(() => {
  return import("pages/Home");
});
function App() {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",

      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,

      duration: 1000,
      easing: "ease-in",
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <HomePage />
        </div>
      </Suspense>
    </>
  );
}

export default App;
