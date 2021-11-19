import './Home.css'
import SAM from '../../assets/SAMap.png'

const Home = () => {
    return ( 
        <div className="landing">
            <div className="container">
                <h1 className="page-title">Plan Your Next Escapade</h1>
                <div className="sam">
                    <img src={SAM} alt="south america" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;