import { useState } from "react"
export default function Language() {
    const [language, setLanguage] = useState("FR");
    const flags = {
        FR : "https://cdn-icons-png.flaticon.com/128/197/197560.png",
        EN : "https://cdn-icons-png.flaticon.com/128/197/197374.png"
    }
    return (
        <div className="language">
            <img src={flags[language]}></img>
        </div>
    )
}