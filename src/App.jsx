
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Root } from './pages/Root/Root.jsx';
import { Brownie } from './pages/Brownie/Brownie.jsx';
import { Mousse } from './pages/Mousse/Mousse.jsx';
import { PaoDeMel } from './pages/PaoDeMel/PaoDeMel.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route path="/ingredientes" element={<Home/>}/>;
          <Route path='/ingredientes/brownie' element={<Brownie/>}/>
          <Route path='/ingredientes/mousse' element={<Mousse/>}/>
          <Route path='/ingredientes/paoDeMel' element={<PaoDeMel/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
