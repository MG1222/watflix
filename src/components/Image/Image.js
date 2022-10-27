import { useState } from "react";
import PlaceholderSmall from './placeholder-small.png';
import PlaceholderLarge from './placeholder-large.png';
import PlaceholderXs from './placeholder-xs.png';

export default function Image(props) {
    const { src, size} = props;
    const [error, setError] = useState(false);
    let backgroundImage = PlaceholderSmall;

    switch(size) {
        case 'small':
            backgroundImage = PlaceholderSmall;
            break;
        case 'large':
            backgroundImage = PlaceholderLarge;
            break;
        case 'xs':
            backgroundImage = PlaceholderXs;
            break;
        default:
            backgroundImage = PlaceholderSmall;
    }

    const handleError = (event) =>  {
        event.preventDefault();
        event.target.src = backgroundImage;
    }

    return (
        <img src={src} alt="Erreur" {...props} onError={(e) => handleError(e)} style={{backgroundImage : backgroundImage}}></img>
    )
}
