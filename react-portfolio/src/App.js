import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes> */}
      <Layout />
      <Home />
      <About path=""/>
      <Contact path="#Contact" />
    </>
  )
}

export default App;