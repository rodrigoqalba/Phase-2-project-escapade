import ThemeSelector from './ThemeSelector'
import { useTheme } from '../hooks/useTheme'
// // styles
import './SideBar.css'


function SideBar() {

  const {color} = useTheme()

  return (
    <div className="side-bar" style={{ background: color }}>
        <div id='theme' ><ThemeSelector/></div>
        Brazil
        <br/>
        Argentina
        <br/>
        Peru
        <br/>
        Bolivia
        <br/>
        Colombia
        <br/>
        Chile
    </div>
  )
}

export default SideBar