import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
      {/* <ComingSoon /> */}
    </LanguageProvider>
  );
}

export default App;
