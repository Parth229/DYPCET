// src/App.js
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademicsPage from './pages/AcademicsPage';
import FacultyPage from './pages/FacultyPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#103d74',
      light: '#1756a3',
      dark: '#0c2c54',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#103d74',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#103d74',
      secondary: '#4a4a4a',
    },
  },
  typography: {
    h1: {
      color: '#103d74',
    },
    h2: {
      color: '#103d74',
    },
    h3: {
      color: '#103d74',
    },
    h4: {
      color: '#103d74',
    },
    h5: {
      color: '#103d74',
    },
    h6: {
      color: '#103d74',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#103d74',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#0c2c54',
          },
        },
        outlined: {
          borderColor: '#103d74',
          color: '#103d74',
          '&:hover': {
            borderColor: '#0c2c54',
            backgroundColor: 'rgba(16, 61, 116, 0.04)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#103d74',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">DYPCETK</a>
          {/* ...existing code... */}
        </div>
      </nav>

      <header className="hero text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Welcome to DYPCETK</h1>
          <p className="lead mb-4">Excellence in education, innovation, and community.</p>
          <a href="#admissions" className="btn btn-light btn-lg">Apply Now</a>
        </div>
      </header>

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> {/* <-- 2. ADD ROUTE */}
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Box>
      
      <footer className="bg-dark text-white py-3">
        <div className="container text-center small">
          © {new Date().getFullYear()} DYPCETK — All rights reserved.
        </div>
      </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;