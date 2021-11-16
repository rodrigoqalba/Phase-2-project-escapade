import { useLocation } from "react-router";
import AdventureList from "../../components/AdventureList";
import { useFetch } from "../../hooks/useFetch";
import "./Search.css"

const Search = () => {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const url = 'http://localhost:8000/countries?q='+query
    const { error, isPending, data } = useFetch(url)

    return ( 
        <div className="search">
            <h2 className="page-title">Adventures including "{query}"</h2>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading... </p>}
            {data && <AdventureList adventures={data}/>}
        </div>
     );
}
 
export default Search;