import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/AdventureList'

import "./Adventures.css"

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8000/recipes')

    return ( 
        <div className="home">
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
     );
}
 
export default Home;