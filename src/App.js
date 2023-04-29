import './App.css';
import {Routes,Route} from 'react-router-dom';
import 'animate.css';
import Accueil from './Pages/Accueil';
import LogPage from './components/LogPage';
import SearchingPage from './Pages/SearchingPage';



function App() {
  return (
    <Routes>
    <Route path="/" element={<Accueil/>}/>
    <Route path='/loginPage' element={<LogPage/>}/>
    <Route path='/searching' element={<SearchingPage/>}/>

  </Routes>
  );
}

export default App;
