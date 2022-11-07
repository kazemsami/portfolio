import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
