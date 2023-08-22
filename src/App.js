import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
// import Home from "./Pages/Home/HomePage"
import HomePage from './Pages/Home/HomePage';
import Movielist from './components/Movielist/Movielist';
import Moviedetails from './Pages/MovieDetails/Moviedetails';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element = {<HomePage/>}></Route>
          <Route path='movie/:id' element = {<Moviedetails/>}></Route>
          <Route path='movies/:type' element = {<Movielist/>}></Route>
          <Route path='/*' element = {<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
