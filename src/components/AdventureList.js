import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import "./AdventureList.css"

const AdventureList = ({adventures}) => {

    const { mode, color } = useTheme()

    return ( 
        <div className={`adventure-list ${mode}`}>
            {adventures.map(adventure => (
                <div key={adventure.id} className={`card ${mode}`}>
                    <h1>{adventure.country}</h1>
                    <h3>{adventure.location}</h3>
                    <img src={adventure.image} alt={adventure.location} style={{width: 200}}/>``
                    <p>{adventure.activity}</p>
                    <div>
                        {adventure.description.substring(0, 100)}...
                    </div>
                    <Link style={{background:color}}to={`/feature/${adventure.id}`}>Do This</Link>
                </div>
            ))}
        </div>
     );
}
 
export default AdventureList;