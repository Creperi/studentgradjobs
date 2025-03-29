import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    ThemeProvider,
    createTheme,
    List,
    MenuItem,
    Select,
    InputLabel, FormControl, ListItem
} from "@mui/material";
import Graduates from "./Graduates.js"; // Make sure you import this correctly
import "@fontsource/nunito";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useState } from "react";
import JobListing from "./JobListing.jsx";
import UserListing from "./UserListing.jsx";

export default function GraduatesListings() {
    const [gradYear, setGradYear] = useState('');

    const handleChange = (event) => {
        setGradYear(event.target.value);
    };

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <Stack direction="row" spacing={2} sx={{ pt: 2, px: 2 }}>
                <FormControl sx={{ width: "8%" }}> {/* Increased width to make the dropdown easier to interact with */}
                    <InputLabel id="grad-year-label">Graduation Year</InputLabel>
                    <Select
                        labelId="grad-year-label"
                        id="grad-year"
                        value={gradYear}
                        label="Graduation Year"
                        onChange={handleChange}
                    >
                        <MenuItem value={2024}>2024</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            <List>
                {Graduates && Graduates.length > 0 ? (
                    Graduates.map((graduate) => (
                        <ListItem key={graduate.id}>
                            <UserListing {...graduate} /> {/* Pass the graduate object as props */}
                        </ListItem>
                    ))
                ) : (
                    <Typography sx={{ p: 2 }}>No graduates found for this year.</Typography>
                )}
            </List>
</Box>
);
}
