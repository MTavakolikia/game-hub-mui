import { Avatar, Box, CircularProgress, List, ListItemButton, ListItemText } from "@mui/material";
import useGenres from "../../hooks/useGenres"
import getCroppedImageUrl from "../../services/image-url";

const Sidebar = () => {
    const { data, loading, error } = useGenres();

    if (error) return null

    if (loading) return (<Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box>);

    return (
        <aside>
            <List component="nav" aria-label="main mailbox folders">
                {data.map(item =>
                    <ListItemButton
                        key={item.id}
                    // selected={selectedIndex === 0}
                    // onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <Avatar alt={item.name} src={getCroppedImageUrl(item.image_background)} variant="rounded" />
                        <ListItemText primary={item.name} className="ml-2" />
                    </ListItemButton>
                )}
            </List>
        </aside>
    )
}

export default Sidebar