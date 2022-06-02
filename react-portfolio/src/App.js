import './App.scss';
import Layout from './components/Layout'
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="react-portfolio">
      <Header />
      <Routes>
        <Route path="/" element= {<Layout />} />
      </Routes>

    </div>
  );
}

export default App;