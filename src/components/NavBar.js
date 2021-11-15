
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useTheme } from '../hooks/useTheme'
// styles
import './NavBar.css'


export default function Navbar() {

  const {color} = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Escapade</h1>
        </Link>
        <Searchbar />
        <Link className="link" to="/adventures">Adventure List</Link>
        <Link className="link" to="/create">Add an Adventure</Link>
      </nav>
    </div>
  )
}