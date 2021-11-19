import ThemeSelector from './ThemeSelector'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
// // styles
import './SideBar.css'
import FavoritesList from './FavoritesList'


function SideBar({ favorites, handleDelete }) {
  const {color} = useTheme()
  const [country, setCountry] = useState('')
  const history = useHistory()
  
  const handleClick = (e) => {
    e.preventDefault()
    history.push(`/search?q=${country}`)
  }

  const stateChange = (e) => {
    setCountry(e.target.textContent)
  }

  const favsList = favorites.map((fav) => (
    <FavoritesList key={fav} fav={fav} handleDelete={handleDelete}/>
  ))
 
  return (
    <div className="side-bar" style={{ background: color }}>
        <div id='theme' ><ThemeSelector/></div>
          <div className="countries">
            <br/>
            <p onClick={handleClick} onMouseEnter={stateChange}>Argentina</p>
            <br/>
            <p onClick={handleClick} onMouseEnter={stateChange}>Bolivia</p>        
            <br/>
            <p onClick={handleClick} onMouseEnter={stateChange}>Brazil</p>
            <br/>
            <p onClick={handleClick} onMouseEnter={stateChange}>Chile</p>
            <br/>
            <p onClick={handleClick}onMouseEnter={stateChange}>Colombia</p>
            <br/>
            <p onClick={handleClick} onMouseEnter={stateChange}>Peru</p>
          </div>
          <div>
            <h4>Favorites List:</h4>
            {favsList}
          </div>
    </div>
  )
}

export default SideBar