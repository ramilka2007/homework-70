import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home';
import NewPerson from './containers/NewPerson/NewPerson';
import EditPerson from './containers/EditPerson/EditPerson';

const App = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<NewPerson />} />
        <Route path="/edit-person/:id" element={<EditPerson />} />
      </Routes>
    </>
  );
};

export default App;
