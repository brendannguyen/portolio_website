import { Button, Card, CardActions, CardMedia, Chip, Stack, Typography } from "@mui/material"


const BlogCard = (props) => {
    return (
        <Card raised sx={{bgcolor: '#00224D', padding: '1em', '&:hover': {bgcolor: '#481E14'}, transition: 'background-color 1s'}}>
            <Typography variant="h7" gutterBottom color="#F6B17A" marginTop='0.5em'>{props.date}</Typography>
            <Typography variant="h5" gutterBottom color="#F2613F"  textAlign="center" marginTop='0.5em'>{props.heading}</Typography>
            <Stack direction='row' spacing={1} justifyContent='center' flexWrap='wrap' rowGap='0.5em'>{props.skills.map((skill) => (<Chip size="small" label={skill.label} sx={{bgcolor: '#F6B17A'}}/>))}</Stack>
            <Typography marginTop='0.5em' variant="body2" color="#F2613F" textAlign="center" gutterBottom>
                {props.body}
            </Typography>
            {props.media &&
                <Stack direction='row'  width='100%' justifyContent='center' flexWrap='wrap'  maxHeight='35vh' overflow='auto'>
                    {props.media && props.media.map((media) => (
                        <CardMedia  sx={{ width: '40%', borderRadius: 3, padding: '0.5em'}} src={media.src} component={media.type} title={media.title} controls/>
                    ))}
                </Stack>
            }
            {props.actions &&
                <CardActions sx={{justifyContent: 'center', marginTop: '0.5em'}}>
                    {props.buttons && props.buttons.map((button) => (
                        <Button target="_blank" href={button.href} size='small' variant="outlined" sx={{color: 'white', borderColor: 'white', ":hover": {color: '#F2613F', borderColor: '#F2613F'}}}>{button.text}</Button>
                    ))}
                </CardActions>
            }
        </Card>
    )
}

export default BlogCard;