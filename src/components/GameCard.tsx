import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlatformIcon from './PlatformIcon';
import getCroppedImageUrl from '../services/image-url';
import { Game } from '../models/game';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';



export default function GameCard({ games }: Game) {
    const { name, background_image, metacritic, parent_platforms } = games
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <CardMedia
                sx={{ height: 200 }}
                image={getCroppedImageUrl(background_image)}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
            </CardContent>
            <CardActions className='flex justify-between'>
                <PlatformIcon platforms={parent_platforms.map(p => p.platform)} />
                <p className=' bg-green-300 dark:bg-opacity-20 text-green-200 px-2 rounded'>   {metacritic}</p>
                <Typography sx={{
                    color: colors.greenAccent[100],
                    backgroundColor: colors.greenAccent[500],
                }
                } variant="h6" >
                    {metacritic}
                </Typography>
            </CardActions>
        </>
    );
}
