import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Adventures from './pages/adventures/Adventures';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Feature from './pages/feature/Feature';
import NavBar from './components/NavBar';
import ThemeSelector from './components/ThemeSelector';
import Home from './pages/home/Home';

//styles
import './App.css'
import { useTheme } from './hooks/useTheme';

function App() {

  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
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
            <Feature />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App
