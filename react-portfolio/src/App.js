import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="react-portfolio">
      <Header />
      <Navigation />
      <About />
      <Projects />
    </div>
  );
}

export default App;