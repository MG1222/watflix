import {useNavigate} from 'react-router-dom';

function Details(){
    const navigate=useNavigate();

    return(
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
        </div>
    )
}

export default Details;