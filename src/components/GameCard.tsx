import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Game } from '../hooks/useGames';
import PlatformIcon from './PlatformIcon';



export default function GameCard({ games }: Game) {
    const { name, background_image, metacritic, parent_platforms } = games
    console.log(parent_platforms);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 }}
                image={background_image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}
            </CardContent>
            <CardActions className='flex justify-between'>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                <PlatformIcon platforms={parent_platforms.map(p => p.platform)} />
                <p className=' bg-green-300 bg-opacity-20 text-green-200 px-2 rounded'>{metacritic}</p>
            </CardActions>
        </Card>
    );
}
