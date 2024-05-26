
import { FormControlLabel, Switch } from "@mui/material";
import { useEffect } from "react";
import { useThemeContext } from "../context/ThemeContext";

export const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'light';
};

const ColorMode = () => {

    // const [themeMode, setThemeMode] = useState<'light' | 'dark'>(getInitialTheme);
    const { themeMode, toggleTheme } = useThemeContext();

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(themeMode));
    }, [themeMode]);

    // const handleColorMode = () => {
    //     console.log(themeMode);

    //     setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    // }
    return (
        <>

            {/* <IconButton onClick={() => toggleTheme()}>
                {themeMode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )}
            </IconButton> */}
            <FormControlLabel control={<Switch checked={themeMode === "dark"} />} onClick={() => toggleTheme()} label={themeMode === "dark" ? "Dark Mode" : "Light Mode"} />

        </>
    );
};

export default ColorMode;