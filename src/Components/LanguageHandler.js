import React from "react";
import { useLanguageContext } from "./Contexts/LanguageContext";

export default function LanguageHandler() {
    const { language, changeLanguage } = useLanguageContext();

    return (
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="eng">ENG</option>
            <option value="ru">RU</option>
            <option value="ro">RO</option>
        </select>
    );
}
