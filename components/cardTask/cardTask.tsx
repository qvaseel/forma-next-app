import { Typography, Card, CardContent, CardHeader } from "@mui/material"

import styles from "./cardTask.module.css"

export interface CardTaskProps {
    title: string,
    description: string
}

const CardTask: React.FC<CardTaskProps> = ({ title, description }) => {
    const currentDate = new Date();
    return (
        <Card sx={{ minWidth: 300}} variant="outlined">
            <CardContent>
                <Typography variant='h5' color='#263238'>{title}</Typography>
                <Typography variant='h6' color='#263238'>{description}</Typography>
                <Typography variant='h5' color='#263238'>Добавлено {currentDate.toLocaleDateString()}</Typography>
            </CardContent>
        </Card>
    )
}

export default CardTask