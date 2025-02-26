import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ResultsPage from "./ResultsPage";

export default function App() {
    return (
        <Router>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Link to="/results" style={{ textDecoration: "none", color: "white" }}>
                            Job board
                        </Link>
                    </Typography>
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
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}
