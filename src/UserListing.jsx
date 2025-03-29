import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {Button, Typography} from "@mui/material";


export default function UserListing({Fullname, School, GradYear}) {
    return(
        <Box sx={{ border: 1, borderRadius: '16px', width: "40%", borderColor: 'gray', p: 2, mb: 2 }}>
            <Stack spacing={1}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="h5" >{Fullname}</Typography>
                    <Typography variant="p" sx={{color: 'text.secondary', userSelect: "none"}}>{School}</Typography>
                </Stack>
                <Typography variant="body2">Year of graduation {GradYear}</Typography>
            </Stack>
            <Button>
                <Button variant="contained" color="primary">
                    Add Friend
                </Button>
            </Button>
        </Box>
    )
}