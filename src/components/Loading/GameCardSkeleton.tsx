import { Skeleton, Box } from '@mui/material'

const GameCardSkeleton = () => {
    return (
        <>
            <Skeleton variant="rectangular" height={200} />
            <Box sx={{ padding: "5px" }}>
                <Box sx={{ pt: 2.5 }}>
                    <Skeleton width="60%" />
                </Box>
                <Box sx={{ pt: 2.5, display: "flex", justifyContent: "space-between" }}>
                    <div className=' flex gap-2'>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </div>
                    <Skeleton width="36px" height="40px" />
                </Box>
            </Box>
        </>

    )
}

export default GameCardSkeleton