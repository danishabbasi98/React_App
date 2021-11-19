import { Container } from '@material-ui/core';
import {Routes , BrowserRouter ,Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';

function App() {
  return (
    <BrowserRouter>
     <Header/>
     <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending />} exact />
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/series' element={<Series/>}/>
          
        </Routes >
      </Container>
     </div>
     <SimpleBottomNavigation />
     </BrowserRouter>
  );
}

export default App;
