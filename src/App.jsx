import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ServiceOffline from "./pages/ServiceOffline";
import ServiceOnline from "./pages/ServiceOnline";

function App() {
  return (
    <>
      <Header />
      <div className="screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offline" element={<ServiceOffline />} />
          <Route path="/online" element={<ServiceOnline />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
