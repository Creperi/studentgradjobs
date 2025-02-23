import {Button, InputAdornment, List, ListItem} from "@mui/material";
import Listings from "./Listings.js";
import Listing from "./Listing.jsx";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import { Search } from "@mui/icons-material";
import listings from "./Listings.js";
import Stack from "@mui/material/Stack";

export default function ResultsPage() {

    const [query, setQuery] = useState("");
    const [filteredListings, setFilteredListings] = useState(Listings);

    const handleSearch = () => {
        setFilteredListings(
            listings.filter((item) =>
                item.JobTitle.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    return (
        <div>
            <Stack direction="row" spacing={2} sx={{pt: 2, px:16}}>
                <TextField
                    id="JobSearch"
                    label="Outlined"
                    onChange={(e) => setQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}/>
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Stack>
            <List>
                {filteredListings.length > 0 ? (
                    filteredListings.map((listing) => (
                        <ListItem key={listing.id}>
                            <Listing {...listing} />
                        </ListItem>
                    ))
                ) : (
                    <p>No job listings available.</p>
                )}
            </List>
        </div>
    );
}
