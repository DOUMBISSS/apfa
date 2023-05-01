import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'animate.css';
import Accueil from './Pages/Accueil';
import LogPage from './components/LogPage';
import SearchingPage from './Pages/SearchingPage';
import Informations from './Pages/Informations';
import Login from './components/Login';
import Home from './components/Home';



function App() {
  return (
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/loginPage' element={<LogPage/>}/>
    <Route path='/searching' element={<SearchingPage/>}/>
    <Route path='/nos--formations' element={<Informations/>}/>
    <Route path='/login' element={<Login/>}/>


  </Routes>
  );
}

export default App;
