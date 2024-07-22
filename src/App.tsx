import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./containers/Home/Home";

const App = () => {
  return (
      <>
        <header>
          <Toolbar />
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </>
  );
};

export default App;
