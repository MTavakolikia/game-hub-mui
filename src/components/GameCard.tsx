import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface Props {
    imgUrl: string;
    title: string;
    score: number
}

export default function GameCard({ imgUrl, title, score }: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imgUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Share</Button>
                <Button size="small">Learn More</Button> */}
                <p className=' bg-green-300 bg-opacity-20 text-green-200 px-2 rounded'>{score}</p>
            </CardActions>
        </Card>
    );
}
