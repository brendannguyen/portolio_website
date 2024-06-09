import { Card, CardMedia, Chip, Stack, Typography } from "@mui/material"


const FilmCard = (props) => {
    return (
        <Card raised sx={{bgcolor: '#481E14', padding: '1em', '&:hover': {bgcolor: '#00224D'}, transition: 'background-color 1s'}}>
            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>{props.heading}</Typography>
            <Stack direction='row' spacing={1} justifyContent='center' flexWrap='wrap' rowGap='0.5em'>{props.skills.map((skill) => (<Chip size="small" label={skill.label} sx={{bgcolor: '#F6B17A'}}/>))}</Stack>
            <CardMedia component='iframe' src={props.src} allowFullScreen sx={{height: '25em', maxHeight: '25em', width: '100%', borderWidth: 0, borderRadius: 1, marginTop: '0.5em'}} />
        </Card>
    )
}

export default FilmCard;