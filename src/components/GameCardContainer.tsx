import { Card } from '@mui/material'
import { ReactNode } from 'react'
interface Props {
    children: ReactNode
}
const GameCardContainer = ({ children }: Props) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 3 }} className=' overflow-hidden'>
            {children}
        </Card>
    )
}

export default GameCardContainer