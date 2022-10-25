import {useNavigate} from 'react-router-dom';

function Favoris(){
    const navigate=useNavigate();

    return(
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/details")}>Details</button>
        </div>
    )
}

export default Favoris;