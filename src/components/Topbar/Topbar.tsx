import { AppBar, Toolbar, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import ColorMode from "../ColorMode";
interface Props {
    handleDrawerToggle: () => void;
    drawerWidth: number
}
const Topbar = ({ drawerWidth = 240, handleDrawerToggle }: Props) => {

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>


                <ColorMode />
            </Toolbar>
        </AppBar>
    )
}

export default Topbar