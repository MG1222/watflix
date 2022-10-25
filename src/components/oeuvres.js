import {useNavigate} from 'react-router-dom';

function Oeuvres(){
    const navigate=useNavigate();

    return(
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/details")}>Details</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
        </div>
    )
}

export default Oeuvres;