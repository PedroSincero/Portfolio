// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { About, Contacts, Projects, Home } from "./pages";
import Footer from "./components/Footer/index.jsx";
import Midias from "./components/Midias/index.jsx";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Midias />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
