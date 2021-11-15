import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import "./AdventureList.css"

const RecipeList = ({recipes}) => {

    const { mode } = useTheme

    return ( 
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>
                        {recipe.method.substring(0, 100)}...
                    </div>
                    <Link to={`/feature/${recipe.id}`}>Cook This</Link>
                </div>
            ))}
        </div>
     );
}
 
export default RecipeList;