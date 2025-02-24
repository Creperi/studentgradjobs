import Stack from "@mui/material/Stack";
import { Alert, Button, IconButton, Snackbar, Typography } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Box from "@mui/material/Box";
import { useState } from "react";
export default function Listing({id, JobTitle, Company, Location, savedJobs, setSavedJobs }) {
    const isJobSaved = savedJobs.some((job) => job.id === id); // Check if already saved
    const [isSaved, setIsSaved] = useState(isJobSaved);
    const [open, setOpen] = useState(false);


    const handleClick = () => {
        if (isSaved) {
            setSavedJobs(savedJobs.filter((job) => job.id !== id)); // Remove from savedJobs
        } else {
            setSavedJobs([...savedJobs, { id, JobTitle, Company, Location }]); // Add to savedJobs
        }
        setIsSaved(!isSaved); // Toggle the saved state
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpen(false);
    };

    return (
        <Box sx={{ border: 1, borderRadius: '16px', width: "40%", borderColor: 'gray', p: 2, mb: 2 }}>
            <Stack spacing={1}>
                <Typography variant="h5">{JobTitle}</Typography>
                <Typography sx={{ textTransform: 'uppercase' }}>{Company}</Typography>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="body2">{Location}</Typography>
                    <Button variant="outlined">Apply</Button>
                    <IconButton color="primary" onClick={handleClick}>
                        {
                            isSaved ? <BookmarkIcon /> : <BookmarkBorderIcon />
                        }
                    </IconButton>
                </Stack>
            </Stack>

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" variant="filled">
                    {isSaved ? "Job position saved." : "Job position removed."}
                </Alert>
            </Snackbar>
        </Box>
    );
}
