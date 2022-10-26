export default function Header(props) {
    const { movie } = props;
    let description = "";
    if(movie.description.length > 500) {
        description = movie.description.slice(0, 500) + "...";
    } else {
        description = movie.description;
    }
    return (
        <div className="home-header">
            <img src={movie.img}></img>
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