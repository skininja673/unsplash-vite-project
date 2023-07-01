import { createContext, useContext, useState } from 'react';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [searchTerm, setSearchTerm] = useState('cat');

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector('body');

        body.classList.toggle('dark-theme', newDarkTheme);
    };

    return (
        <AppContext.Provider
            value={{ toggleDarkTheme, isDarkTheme, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
