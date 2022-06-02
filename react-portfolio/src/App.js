import './App.scss';
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="react-portfolio">
      <Routes>
        <Route path="/" element= {<Layout />} />
      </Routes>

    </div>
  );
}

export default App;