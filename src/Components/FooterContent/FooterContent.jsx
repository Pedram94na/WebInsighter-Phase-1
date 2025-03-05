import React from 'react'
import './footer-content.css'
import { Grid2 as Grid, Box } from '@mui/material'
import { LocationCity, Mail, Instagram, LinkedIn, FacebookRounded } from '@mui/icons-material'

export default function FooterContent() {
    return (
        <div className='footer_content__div'>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={4} sm={2}>
                    <Box p={2}>
                        <img className="footer_logo" src="/LogoDark.png" alt="Logo" />
                    </Box>
                </Grid>

                <Grid item xs={4} sm={4}>
                    <Box>
                        <ul className='footer_social-media__ul'>
                            <li>
                                <a href='https://www.instagram.com/web_insighter?igsh=MTUxdGR1b3EzMjloYg%3D%3D&utm_source=qr'>
                                    <Instagram />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/company/webinsighter/'>
                                    <LinkedIn />
                                </a>
                            </li>
                            <li>
                                <a href='http://facebook.com'>
                                    <FacebookRounded />
                                </a>
                            </li>
                        </ul>
                    </Box>
                </Grid>

                <Grid item xs={4} sm={6}>
                    <Box>
                        <ul className='footer_contacts__ul'>
                            <li>
                                <LocationCity />
                                <span>Budapest, HU</span>
                            </li>
                            <li>
                                <Mail />
                                <span>info@webinsighter.com</span>
                            </li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>

            <Grid>
                <p className='all_rights'>© 2025 WebInsighter. All rights reserved.</p>
            </Grid>
        </div>
    )
}
