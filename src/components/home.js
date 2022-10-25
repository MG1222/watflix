import {useNavigate} from "react-router-dom";

function Home(){

    const navigate = useNavigate();

    return(
        <div>
            <button onClick={()=>navigate("/search")}>Search</button>
            <button onClick={()=>navigate("/oeuvres")}>Oeuvres</button>
            <button onClick={()=>navigate("/details")}>Details</button>
            <button onClick={()=>navigate("/favoris")}>Favoris</button>
        </div>
    )
}

export default Home;