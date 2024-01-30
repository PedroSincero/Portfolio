// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage.jsx";
import { About, Contacts, Projects } from "./pages";
import Footer from "./components/Footer/index.jsx";
import Midias from "./components/Midias/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Midias />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
