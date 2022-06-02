import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes> */}

      <Layout />
      <br />
      <About />
      <br />
      <Projects />
      <br />
      {/* <Contact /> */}

    </>
  )
}

export default App;