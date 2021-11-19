import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Adventures from './pages/adventures/Adventures';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Feature from './pages/feature/Feature';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import SideBar from './components/SideBar';
import { useState } from 'react'

//styles
import './App.css'
import { useTheme } from './hooks/useTheme';

function App() {

  const [favorites, setFavorites] = useState([])

  const handleFavorites = (newFavorite) => {
    if ( !favorites.includes(newFavorite)) {
    const updatedFavs = [...favorites, newFavorite]
     setFavorites(updatedFavs)
    } else {
      return favorites
    }
  }

  const handleDelete = (favorite) => {
    const updatedFavs = favorites.filter(fav => fav !== favorite)
    return setFavorites(updatedFavs)
  }
  console.log(favorites)

  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <NavBar />
        <SideBar favorites={favorites} handleDelete={handleDelete}/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/adventures'>
            <Adventures />
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/search'>
            <Search/>
          </Route>
          <Route path='/feature/:id'>
            <Feature handleFavorites={handleFavorites}/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
