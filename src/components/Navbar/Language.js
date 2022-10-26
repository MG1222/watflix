import { useState } from "react"
export default function Language() {
    const [language, setLanguage] = useState("FR");
    const [openDropdown, setOpenDropdown] = useState(false);
    const flags = {
        FR: "https://cdn-icons-png.flaticon.com/128/197/197560.png",
        EN: "https://cdn-icons-png.flaticon.com/128/197/197374.png",
    }

    const changeLanguage = (language) => {
        setLanguage(language);
        setOpenDropdown(false);
    }

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown);
    }
    return (
        <div className="language">
            <div className="language-dropdown" >
                <img src={flags[language]} onClick={toggleDropdown}></img>
                {
                    openDropdown ? 
                        <div className="language-dropdown-content">
                            {
                                Object.entries(flags).map((flag, key) => 
                                    flag[0] !== language ? <img src={flag[1]} key={`flag${key}`} onClick={(e) => changeLanguage(flag[0])}></img> : null
                                )
                            }
                        </div>
                    : null
                }
                
            </div>
        </div>
    )
}