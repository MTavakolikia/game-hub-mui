import { ThemeProvider } from '@mui/material/styles';

import {
    RouterProvider,
} from "react-router-dom";
// import { getInitialTheme } from './components/ColorMode.tsx';
import { ThemeProviderComponent } from '../context/ThemeContext.tsx';
import { useMode } from '../theme.ts';
import { router } from '../router/router.tsx';

const Provider = () => {
    const [theme] = useMode();
    return (
        <ThemeProvider theme={theme}>
            <ThemeProviderComponent>
                <RouterProvider router={router} />
            </ThemeProviderComponent>
        </ThemeProvider>
    )
}

export default Provider