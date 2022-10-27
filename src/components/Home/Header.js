import Image from "../Image/Image";
export default function Header(props) {
    const { movie } = props;
    // check for empty movie
    if(!movie ||
        ( Object.keys(movie).length === 0
        && Object.getPrototypeOf(movie) === Object.prototype)
        ) {
        return null;
    }
    let description = "";
    console.log(movie);
    if(movie.overview.length > 500) {
        description = movie.overview.slice(0, 500) + "...";
    } else {
        description = movie.overview;
    }
    return (
        <div className="home-header">
            <Image src={`https://image.tmdb.org/t/p/w780/${movie.image}`}size="small"/>
            <h1>{movie.title}</h1>
            <p className="header-description">{description}</p>
        </div>
    )
};