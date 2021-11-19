import './FavoritesList.css'
//styles

const FavoritesList = ({fav, handleDelete}) => {
    return ( 
        <div className="favorites">
            <ul>
                <button onClick={()=>handleDelete(fav)}>x</button>
                <li>{fav}</li>
            </ul>
        </div>
     );
}
export default FavoritesList;