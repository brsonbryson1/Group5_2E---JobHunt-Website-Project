import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Login from './Login';
import UserList from './UserList';
import PrivateRoute from './PrivateRoute';
import Register from './Register';
import Navbar from './Navbar';
import JobSearch from './JobSearch';
import JobSearchPage from './JobSearchPage'; 
import ProductList from './ProductList';
import HiringAdvice from './HiringAdvicePage';
import MarketInsights from './MarketInsightsPage'; 

const theme = createTheme({
    palette: {
        background: {
            paper: '#fff',
        },
    },
});

function App() {
    useEffect(() => {
        // Set CSRF token before any other requests
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
            .then(response => {
                console.log('CSRF cookie set:', response);
            })
            .catch(error => {
                console.error('Error setting CSRF cookie:', error);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Navbar />
                <Routes>
                    {/* Redirect "/" to JobSearch */}
                    <Route path="/" element={<Navigate to="/job-search" replace />} />
                    
                    {/* JobSearch page */}
                    <Route path="/job-search" element={<JobSearch />} />

                    {/* JobSearchPage with its own unique path */}
                    <Route path="/jobs" element={<JobSearchPage />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/hiring-advice" element={<HiringAdvice />} />
                    <Route path="/market-insights" element={<MarketInsights />} /> 
                    
                    {/* Login and Register pages */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Private route for UserList */}
                    <Route
                        path="/users"
                        element={
                            <PrivateRoute>
                                <UserList />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
