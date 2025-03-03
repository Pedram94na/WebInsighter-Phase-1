import React from 'react'
import './footer-content.css'
import {Grid2 as Grid, Box} from '@mui/material'
import { LocationCity, Phone, Mail, MyLocation, Instagram, LinkedIn, Facebook, FacebookRounded } from '@mui/icons-material'

export default function FooterContent()
{

    let photo = "./"
    return(
        <div className='footer_content__div'>
            <Grid container spacing={2}>
                <Grid item size={{xs:6, md: 4}}>
                    <Box p={2}>
                        <img className="footer_logo" src="/LogoDark.png" style={{width: '150px'}}/>
                    </Box>
                </Grid>

                <Grid item size={{xs:12, md: 4}} justifyItems={{xs:'center'}}>
                    <Box>
                    <ul className='footer_social-media__ul'>
                        <li>
                            <a href='https://www.instagram.com/web_insighter?igsh=MTUxdGR1b3EzMjloYg%3D%3D&utm_source=qr'>
                                <Instagram/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/company/webinsighter/'>
                                <LinkedIn/>
                            </a>
                        </li>
                        <li>
                            <a href='http=facebook.com'>
                                <FacebookRounded/>
                            </a>
                        </li>
                       </ul>
                    </Box>
                </Grid>
                
                <Grid item size={{xs:6, md: 4}}>
                    <Box>
                       <ul className='footer_contacts__ul'>
                        <li>
                            <LocationCity/>
                            <span>
                            Budapest, HU
                            </span>
                        </li>
                        <li>
                            <Mail/>
                            <span>
                            info@webinsighter.com
                            </span>
                            </li>
                       </ul>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}