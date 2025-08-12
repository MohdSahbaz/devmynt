import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col">
      <Header />
      <div className="max-w-7xl mx-auto">
        <Home />
        <About />
        <Services />
        <Packages />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
      </div>
    </div>
  );
};

export default App;
