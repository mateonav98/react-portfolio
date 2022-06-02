import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home';
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
    </>
  )
}

export default App;