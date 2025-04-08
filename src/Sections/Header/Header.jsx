import React, { useEffect, useState } from 'react';
import './header.css';
import { Navigation } from '..';
import { Button, Grid, Box } from '@mui/material';

export default function Header() {
    const coverPhoto = `${process.env.PUBLIC_URL}/HomeWallpaper1.webp`;
    const text = {
        header: 'Build. Grow. Scale. Your Digital Success Starts Here.',
        body: 'Websites that convert. SEO that ranks. Marketing that drives results.'
    };

    function scrollToSec(id, offset = 40) {
      const element = document.getElementById(id);
      if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
      }
  }

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    return (
        <header className={`header ${animate ? 'zoom-out' : 'zoom-in'}`} style={{ backgroundImage: `url(${coverPhoto})` }}>
            <Navigation />
            <Grid container spacing={2} justifyContent='center' alignItems='center' height='100%' className=''>
                <Grid item xs={0} lg={1}></Grid>
                <Grid item xs={10} alignContent='center' alignItems='center' alignSelf='end'>
                    <Box p={2}>
                        <div className={`header_text ${animate ? 'fade-in' : ''}`}>
                            <h2>{text.header}</h2>
                            <p>{text.body}</p>
                            <Button
                                onClick={() => scrollToSec("contact-us-part")}
                                className={`header_button__back ${animate ? 'fade-in' : ''}`}
                                variant='outlined'
                                color='white'
                            >
                                Let's grow your business today
                            </Button>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </header>
    );
}
