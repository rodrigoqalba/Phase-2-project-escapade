import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

import "./Feature.css"

const Recipe = () => {

    const { id } = useParams()
    const url = 'http://localhost:8000/countries/' + id
    const { error, isPending, data: adventure} = useFetch(url)
    const { mode } = useTheme

    return ( 
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {adventure && (
                <>
                    <h2 className="page-title">{adventure.location} </h2>
                    <img src={adventure.image} alt={adventure.location} style={{width: 800}}/>
                    <h3>{adventure.activity}</h3>
                    <br/>
                    <p>{adventure.description}</p>
                </>
            )}
        </div>
     );
}
 
export default Recipe;