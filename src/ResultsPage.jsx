import { useState } from "react";
import { Button, InputAdornment, List, ListItem, Tabs, Tab } from "@mui/material";
import Listings from "./Listings.js";
import Listing from "./Listing.jsx";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Search } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function ResultsPage() {
    const [query, setQuery] = useState("");
    const [filteredListings, setFilteredListings] = useState(Listings);
    const [savedJobs, setSavedJobs] = useState([]);
    const [tabIndex, setTabIndex] = useState(0); // 0 = Listings, 1 = Saved Jobs

    const handleSearch = () => {
        setFilteredListings(
            Listings.filter((item) =>
                item.JobTitle.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const handleTabChange = (_, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            {/* Tabs */}
            <Tabs value={tabIndex} onChange={handleTabChange} left>
                <Tab label="Job Listings" />
                <Tab label="Saved Jobs" />
            </Tabs>

            {/* Search Bar (Only for Job Listings) */}
            {tabIndex === 0 && (
                <Stack direction="row" spacing={2} sx={{ pt: 2, px: 2 }}>
                    <TextField
                        id="JobSearch"
                        label="Search Jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Stack>
            )}
            {tabIndex === 0 && (
                <List>
                    {filteredListings.length > 0 ? (
                        filteredListings.map((listing) => (
                            <ListItem key={listing.id}>
                                <Listing {...listing} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography sx={{ p: 2 }}>No job listings available.</Typography>
                    )}
                </List>
            )}
            {tabIndex === 1 && (
                <List>
                    {savedJobs.length > 0 ? (
                        savedJobs.map((job) => (
                            <ListItem key={job.id}>
                                <Listing {...job} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
                            </ListItem>
                        ))
                    ) : (
                        <Typography sx={{ p: 2 }}>No saved jobs.</Typography>
                    )}
                </List>
            )}
        </Box>
    );
}
