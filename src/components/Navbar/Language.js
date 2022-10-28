import { useState } from "react"
import Image from "../Image/Image";
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
                <Image size="xs"src={flags[language]} onClick={toggleDropdown}/>
                {
                    openDropdown ? 
                        <div className="language-dropdown-content">
                            {
                                Object.entries(flags).map((flag, key) => 
                                    flag[0] !== language ? <Image src={flag[1]} key={`flag${key}`} onClick={() => changeLanguage(flag[0])} size="xs" /> : null
                                )
                            }
                        </div>
                    : null
                }
                
            </div>
        </div>
    )
}