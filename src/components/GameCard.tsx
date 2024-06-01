import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Game } from '../hooks/useGames';
import PlatformIcon from './PlatformIcon';
import getCroppedImageUrl from '../services/image-url';



export default function GameCard({ games }: Game) {
    const { name, background_image, metacritic, parent_platforms } = games
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
                <p className=' bg-green-300 bg-opacity-20 text-green-200 px-2 rounded'>{metacritic}</p>
            </CardActions>
        </>
    );
}
