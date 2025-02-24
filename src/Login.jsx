import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

export default function Login() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh" // Centers vertically on the viewport
        >
            <Box
                sx={{
                    py: 2,
                    px: 3,
                    width: "300px", // Adjust width for better responsiveness
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: "background.paper",
                }}
            >
                <Stack spacing={2}>
                    <TextField label="Username" variant="outlined" fullWidth />
                    <TextField label="Password" type="password" variant="outlined" fullWidth />
                    <Button variant="contained" fullWidth>
                        Log in
                    </Button>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                        <IconButton color="primary">
                            <GoogleIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <LinkedInIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}
