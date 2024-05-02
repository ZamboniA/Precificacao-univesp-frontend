
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Root } from './pages/Root/Root';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route path="/" element={<Home/>}/>;
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
