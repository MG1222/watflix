import { useState } from 'react';
import Image from '../Image/Image';
import { useSelector, useDispatch } from "react-redux";
import { addSerie, removeSerie } from "../../store/favoris/favorisSlice";


export default function Series(props) {

    const dispatch = useDispatch();
    const { title, overview, backdrop_path} = props.serie;
    const { serie } = props;
    const [showOverview, setShowOverview] = useState(false);

    const favoris = useSelector((state) => state.favoris.series);
    const [isFav, setFav] = useState(favoris.includes(serie));

    const toggleFavoris = () => {
        if(isFav) {
            dispatch(removeSerie(serie));
            setFav(false);
        } else {
            dispatch(addSerie(serie))
            setFav(true);
        }
    }
    return (
        <div className="movie"
             onMouseEnter={(event) => setShowOverview(true)}
             onMouseLeave={(event) => setShowOverview(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} className="movie-img" alt="img movie"></img>
            {
                showOverview ?

                    <div className='movie-description-short'>
                        <h3>{title}</h3>
                        <p>{overview}</p>
                        <button
                            onClick={(event) => toggleFavoris()}
                        >
                            { isFav ? "Supprimer des favoris" : "Ajouter aux favoris"}
                        </button>
                    </div>
                    :
                    null
            }
        </div>
    )
}