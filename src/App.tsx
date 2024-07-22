import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import NewPerson from "./containers/NewPerson/NewPerson";

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<NewPerson />} />
      </Routes>
    </>
  );
};

export default App;
