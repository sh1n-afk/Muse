import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Forum from "./components/Forum";
import ProductSlider from "./components/ProductSlider";
import PaymentIntegration from "./components/PaymentIntegration";

const App = () => {
  return (
    <div className="container">
      <Header />
      <LandingPage />
      <Forum />
      <ProductSlider />
      <PaymentIntegration />
      <Footer />
    </div>
  );
};

export default App;
