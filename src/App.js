import './App.css';
import { Header, Services, Footer, ContactUs, Portfolio, AboutUs } from './Sections';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme =createTheme(
{
  palette:
    {
      primary:
      {
        main: '#C52F91',
      },
      secondary:
      {
        main:'#F58634',
      }
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* needs to be dynamic from here*/}
        <Header/>
        <Services/>
        <Portfolio/>
        <AboutUs/>
        <ContactUs />
        {/*until here*/}
        <Footer>
        </Footer>

      </div>
    </ThemeProvider>
  );
}

export default App;
