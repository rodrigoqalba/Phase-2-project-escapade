import { useRef, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Create.css"

const Create = () => {

    const [image, setImage] = useState('')
    const [locations, setLocations] = useState('')
    const [description, setDescription] = useState('')
    

    

    const handleSubmit = () => {
        console.log('hi');
    //     e.preventDefault()
    //     postData({ title, locations, description})
    }

    
    

    return ( 
        <div className="create">
            <h2 className="page-title">Add a New Adventure</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <span>Image:</span>
                    <input 
                    type="text"
                    onChange={(e)=> setImage(e.target.value)}
                    value={image}
                    required 
                    />
                </label>

                <label>
                    <span>Location: </span>
                    <input
                    onChange={(e) => setLocations(e.target.value)}
                    value={locations}
                    required
                    />
                </label>
                <label>
                    <span>Description: </span>
                    <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                    />
                </label>

                <button className="btn">Submit</button>

            </form>
        </div>
     );
}
 
export default Create;