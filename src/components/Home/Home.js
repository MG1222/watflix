import React, { useEffect } from "react";
import movieApi from "../../apiConf/movieApi";
import { API_KEY } from "../../apiConf/movieApiKey";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import MovieList from "../MovieList/MovieList";
import {addMovies} from "../../store/movies/movieSlice";
import ListRow from '../List/ListRow';
import Header from "./Header";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`/movie/upcoming?api_key=${ API_KEY }`);
            dispatch(addMovies(response.data.results));
        }
        fetchMovies().then(r => console.log(r));
    } , [dispatch]);


    const movies = [
        {   title:"Harry Potter",
            img:"https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/02/28/18/Harry-Potter-ne-depose-pas-les-charmes.jpg?VersionId=WlNYB2ROPwFGXk20V3fFwDVl4Z3m8.T9",
            descriptionShort:"Les aventures d'un sorcier",
            description: `Orphelin, Harry Potter a été recueilli à contrecœur par son oncle Vernon et sa tante Pétunia, aussi cruels que mesquins, qui n'hésitent pas à le faire dormir dans le placard sous l'escalier. Constamment maltraité, il doit en outre supporter les jérémiades de son cousin Dudley, garçon cupide et archi-gâté par ses parents. De leur côté, Vernon et Pétunia détestent leur neveu dont la présence leur rappelle sans cesse le tempérament "imprévisible" des parents du garçon et leur mort mystérieuse.
            À l'approche de ses 11 ans, Harry ne s'attend à rien de particulier – ni carte, ni cadeau, ni même un goûter d'anniversaire. Et pourtant, c'est à cette occasion qu'il découvre qu'il est le fils de deux puissants magiciens et qu'il possède lui aussi d'extraordinaires pouvoirs. Quand on lui propose d'intégrer Poudlard, la prestigieuse école de sorcellerie, il trouve enfin le foyer et la famille qui lui ont toujours manqué… et s'engage dans l'aventure de sa vie.`,
            cast: [
                {
                    "name": "Daniel Radcliffe",
                },
                {
                    "name": "Emma Watson",
                },
                {
                    "name": "Rupert Grint",
                },
            ]
        },
        {title:"Avatar", img:"https://www.onefm.ch/wp-content/uploads/2022/07/718285-avatar-2-a-enfin-sa-date-de-sortie-en-france.jpg", descriptionShort:"Rencontre avec les Na'vi de Pandora"},
        {title:"Amelie Poulain", img:"https://img.culturebase.org/0/e/c/6/e/pic_1501241738_0ec6e19b58691880fc286016382e8d6c.jpeg", descriptionShort:"Le fabuleux destin d'Amélie Poulain"},
        {title:"Star Wars", img:"https://img-31.ccm2.net/shnC3qG52lm2pn9k7df9AXgCYAs=/1240x/smart/f416beeeb47e44cfb5c446ce22ac0875/ccmcms-hugo/10557653.jpg", descriptionShort:"Les aventures des utilisateurs de la force"},
        {   title:"Harry Potter",
        img:"https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/02/28/18/Harry-Potter-ne-depose-pas-les-charmes.jpg?VersionId=WlNYB2ROPwFGXk20V3fFwDVl4Z3m8.T9",
        descriptionShort:"Les aventures d'un sorcier",
        description: `Orphelin, Harry Potter a été recueilli à contrecœur par son oncle Vernon et sa tante Pétunia, aussi cruels que mesquins, qui n'hésitent pas à le faire dormir dans le placard sous l'escalier. Constamment maltraité, il doit en outre supporter les jérémiades de son cousin Dudley, garçon cupide et archi-gâté par ses parents. De leur côté, Vernon et Pétunia détestent leur neveu dont la présence leur rappelle sans cesse le tempérament "imprévisible" des parents du garçon et leur mort mystérieuse.
        À l'approche de ses 11 ans, Harry ne s'attend à rien de particulier – ni carte, ni cadeau, ni même un goûter d'anniversaire. Et pourtant, c'est à cette occasion qu'il découvre qu'il est le fils de deux puissants magiciens et qu'il possède lui aussi d'extraordinaires pouvoirs. Quand on lui propose d'intégrer Poudlard, la prestigieuse école de sorcellerie, il trouve enfin le foyer et la famille qui lui ont toujours manqué… et s'engage dans l'aventure de sa vie.`,
        cast: [
            {
                "name": "Daniel Radcliffe",
            },
            {
                "name": "Emma Watson",
            },
            {
                "name": "Rupert Grint",
            },
        ]
    },
    {title:"Avatar", img:"https://www.onefm.ch/wp-content/uploads/2022/07/718285-avatar-2-a-enfin-sa-date-de-sortie-en-france.jpg", descriptionShort:"Rencontre avec les Na'vi de Pandora"},
    {title:"Amelie Poulain", img:"https://img.culturebase.org/0/e/c/6/e/pic_1501241738_0ec6e19b58691880fc286016382e8d6c.jpeg", descriptionShort:"Le fabuleux destin d'Amélie Poulain"},
    {title:"Star Wars", img:"https://img-31.ccm2.net/shnC3qG52lm2pn9k7df9AXgCYAs=/1240x/smart/f416beeeb47e44cfb5c446ce22ac0875/ccmcms-hugo/10557653.jpg", descriptionShort:"Les aventures des utilisateurs de la force"},
    {   title:"Harry Potter",
    img:"https://resize-parismatch.lanmedia.fr/var/pm/public/media/image/2022/02/28/18/Harry-Potter-ne-depose-pas-les-charmes.jpg?VersionId=WlNYB2ROPwFGXk20V3fFwDVl4Z3m8.T9",
    descriptionShort:"Les aventures d'un sorcier",
    description: `Orphelin, Harry Potter a été recueilli à contrecœur par son oncle Vernon et sa tante Pétunia, aussi cruels que mesquins, qui n'hésitent pas à le faire dormir dans le placard sous l'escalier. Constamment maltraité, il doit en outre supporter les jérémiades de son cousin Dudley, garçon cupide et archi-gâté par ses parents. De leur côté, Vernon et Pétunia détestent leur neveu dont la présence leur rappelle sans cesse le tempérament "imprévisible" des parents du garçon et leur mort mystérieuse.
    À l'approche de ses 11 ans, Harry ne s'attend à rien de particulier – ni carte, ni cadeau, ni même un goûter d'anniversaire. Et pourtant, c'est à cette occasion qu'il découvre qu'il est le fils de deux puissants magiciens et qu'il possède lui aussi d'extraordinaires pouvoirs. Quand on lui propose d'intégrer Poudlard, la prestigieuse école de sorcellerie, il trouve enfin le foyer et la famille qui lui ont toujours manqué… et s'engage dans l'aventure de sa vie.`,
    cast: [
        {
            "name": "Daniel Radcliffe",
        },
        {
            "name": "Emma Watson",
        },
        {
            "name": "Rupert Grint",
        },
    ]
},
{title:"Avatar", img:"https://www.onefm.ch/wp-content/uploads/2022/07/718285-avatar-2-a-enfin-sa-date-de-sortie-en-france.jpg", descriptionShort:"Rencontre avec les Na'vi de Pandora"},
{title:"Amelie Poulain", img:"https://img.culturebase.org/0/e/c/6/e/pic_1501241738_0ec6e19b58691880fc286016382e8d6c.jpeg", descriptionShort:"Le fabuleux destin d'Amélie Poulain"},
{title:"Star Wars", img:"https://img-31.ccm2.net/shnC3qG52lm2pn9k7df9AXgCYAs=/1240x/smart/f416beeeb47e44cfb5c446ce22ac0875/ccmcms-hugo/10557653.jpg", descriptionShort:"Les aventures des utilisateurs de la force"},
    ];

    return (
        <div className="home">
            <Header movie={movies[0]}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
            <ListRow category="Les meilleurs films" movies={movies}/>
        </div>
    );
};
export default Home;