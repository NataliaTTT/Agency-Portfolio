import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Navigation from "./Components/Navigation";
import Masthead from "./Components/Masthead";
import Services from "./Components/Services";
import Portofolio from "./Components/Portofolio";
import About from "./Components/About";
import Team from "./Components/Team";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Masthead />
      <Services />
      <Portofolio />
      <About />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
