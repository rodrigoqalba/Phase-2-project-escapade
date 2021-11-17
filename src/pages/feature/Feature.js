import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { useState, useEffect } from 'react'

import "./Feature.css"

const Recipe = () => {

    const [isLiked, setIsLiked] = useState(false)

    const { id } = useParams()
    const url = 'http://localhost:8000/countries/' + id
    const { error, isPending, data: adventure} = useFetch(url)
    const { mode } = useTheme

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return ( 
        <div className={`feature ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {adventure && (
                <>
                    <h2 className="page-title">{adventure.location} </h2>
                    <img src={adventure.image} alt={adventure.location} style={{width: 800}}/>
                    <h3>{adventure.activity}</h3>
                    {isLiked ? (
                    <button onClick={()=> setIsLiked(!isLiked)} className="emoji-button favorite active">★</button>
                    ) : (
                    <button onClick={()=> setIsLiked(!isLiked)} className="emoji-button favorite">☆</button>
                    )}
                    <p>{adventure.description}</p>
                </>
            )}
        </div>
     );
}
 
export default Recipe;