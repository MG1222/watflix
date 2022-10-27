import Image from "../Image/Image";
export default function Header(props) {
    const { movie } = props;
    let description = "";
    if(movie.description.length > 500) {
        description = movie.overview.slice(0, 500) + "...";
    } else {
        description = movie.overview;
    }
    return (
        <div className="home-header">
            <Image src={movie.img} size="small"/>
            <h1>{movie.title}</h1>
            <p className="header-description">{description}</p>
            <p className="header-cast">
                Cast: 
                    {movie.cast.map((actor, key) => {
                        return <li key={`actor${key}`}>{actor.name}</li>
                    })}
            </p>
        </div>
    )
};