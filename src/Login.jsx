import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {IconButton} from "@mui/material";

export default function Login() {
    return(
        <Box sx={{ justifyContent="center",
            alignItems="center"
        }}>
            <Stack spacing={2}>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                <Button variant="contained">Log in</Button>
                <Stack direction="row" spacing={2}>
                    <IconButton color="primary">
                        <GoogleIcon/>
                    </IconButton>
                    <IconButton color="primary">
                        <LinkedInIcon/>
                    </IconButton>
                </Stack>
            </Stack>
        </Box>

    )
}