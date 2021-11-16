import { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Create.css"

const Create = () => {

    const [country, setCountry] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const [activity, setActivity] = useState('')
    const [description, setDescription] = useState('')
    const history = useHistory()

    const { postData, data, error } = useFetch('http://localhost:8000/countries', 'POST')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ country, location, image, activity, description })
    }

    useEffect(() => {
        if (data) {
            history.push('/adventures')
        }
    }, [data])
    

    return ( 
        <div className="create">
            <h2 className="page-title">Add a New Adventure</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Country: </span>
                    <input
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                    required
                    />
                </label>
                <label>
                    <span>Location: </span>
                    <input
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    required
                    />
                </label>
                <label>
                    <span>Image:</span>
                    <input 
                    type="url"
                    onChange={(e)=> setImage(e.target.value)}
                    value={image}
                    required 
                    />
                </label>
                <label>
                    <span>Activity: </span>
                    <textarea
                    onChange={(e) => setActivity(e.target.value)}
                    value={activity}
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