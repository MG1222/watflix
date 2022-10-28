import {useEffect, useState} from "react"
import Image from "../Image/Image";
import {fetchAsyncMovies, updateLanguageMovies} from '../../store/movies/movieSlice';
import {fetchAsyncSeries, updateLanguageSeries} from '../../store/series/serieSlice';
import { useDispatch, useSelector } from "react-redux";

export default function Language() {
    const [language, setLanguage] = useState(useSelector(state => state.series.language));
    const [openDropdown, setOpenDropdown] = useState(false);
    const flags = {
        FR: "https://cdn-icons-png.flaticon.com/128/197/197560.png",
        EN: "https://cdn-icons-png.flaticon.com/128/197/197374.png",
    }
    const dispatch = useDispatch();

    const changeLanguage = (lang) => {
        setOpenDropdown(false);
        dispatch(updateLanguageMovies(lang.toLowerCase() + "-" + lang));
        dispatch(updateLanguageSeries(lang.toLowerCase() + "-" + lang));
        dispatch(fetchAsyncMovies(lang.toLowerCase() + "-" + lang));
        dispatch(fetchAsyncSeries(lang.toLowerCase() + "-" + lang));
        setLanguage(lang.toLowerCase() + "-" + lang);
    }

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }
    return (
        <div className="language">
            <div className="language-dropdown" >
                <Image size="xs"src={flags[language.slice(3)]} onClick={toggleDropdown}/>
                {
                    openDropdown ? 
                        <div className="language-dropdown-content">
                            {
                                Object.entries(flags).map((flag, key) => 
                                    flag[0] !== language.slice(3) ? <Image src={flag[1]} key={`flag${key}`} onClick={(e) => changeLanguage(flag[0])} size="xs" /> : null
                                )
                            }
                        </div>
                    : null
                }
                
            </div>
        </div>
    )
}