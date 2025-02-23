import Stack from "@mui/material/Stack";
import { Alert, Button, IconButton, Snackbar, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function Listing({ JobTitle, Company, Location }) {
    const [isSaved, setIsSaved] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setIsSaved(!isSaved);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <Box sx={{ border: 1, borderRadius: '16px', width: "100%", borderColor: 'gray', p: 2, mb: 2 }}>
            <Stack spacing={1}>
                <Typography variant="h5">{JobTitle}</Typography>
                <Typography sx={{ textTransform: 'uppercase' }}>{Company}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="body2">{Location}</Typography>
                    <Button variant="outlined">Apply</Button>
                    <IconButton color="primary" onClick={handleClick}>
                        {isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                </Stack>
            </Stack>

            {/* Snackbar for pop-up alert */}
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" variant="filled">
                    {isSaved ? "Job position saved." : "Job position removed."}
                </Alert>
            </Snackbar>
        </Box>
    );
}
