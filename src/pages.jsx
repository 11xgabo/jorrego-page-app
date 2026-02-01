import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

const Home = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <WhyChooseUs />
    <Footer />
    <WhatsAppFloat />
  </>
);

const AboutPage = () => (
  <>
    <Header />
    <About />
    <Footer />
    <WhatsAppFloat />
  </>
);

const ContactPage = () => (
  <>
    <Header />
    <Contact />
    <Footer />
    <WhatsAppFloat />
  </>
);

export { Home, AboutPage, ContactPage };
