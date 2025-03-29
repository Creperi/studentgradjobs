import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import {AppBar, Toolbar, Typography, Button, ThemeProvider, createTheme} from "@mui/material";
import ResultsPage from "./ResultsPage";
import GraduatesListings from "./GraduatesListings.jsx";
import "@fontsource/nunito"

const theme = createTheme({
    typography: {
        fontFamily: "Nunito",
    }
})
export default function App() {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to="/results" style={{ textDecoration: "none", color: "white" }}>
                            Job board
                        </Link>
                    </Typography>
                    <Button component={Link} to="/graduates" color="inherit">
                        Graduates
                    </Button>
                    <Button component={Link} to="/signup" color="inherit">
                        Sign Up
                    </Button>
                    <Button component={Link} to="/login" color="inherit">
                        Log In
                    </Button>
                </Toolbar>
            </AppBar>

            <div style={{ marginTop: '64px' }}> {/* Adjust to prevent content from being hidden under the AppBar */}
                <Routes>

                    <Route path="/results" element={<ResultsPage/>}></Route>
                    <Route path="/graduates" element={<GraduatesListings />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
        </ThemeProvider>
    );
}
