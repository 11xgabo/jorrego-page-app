import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { Home, AboutPage, ContactPage } from "./pages";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
