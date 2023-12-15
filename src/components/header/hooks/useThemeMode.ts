import { useEffect, useState } from "react";

const useThemeMode = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }

        return false;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.querySelector('html')?.classList.add('dark');
        } else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [isDarkMode])

    return {
        isDarkMode,
        setIsDarkMode
    }
}

export default useThemeMode;
