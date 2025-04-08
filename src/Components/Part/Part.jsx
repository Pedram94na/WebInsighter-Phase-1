import React from 'react'
import './part.css'
import { Button, Grid2 as Grid, Box } from '@mui/material'

export default function Part({id="", color, data="", className="", title, children, backimage={show:false, top: [0,0], left: [0,0] }})
 {
  return (
    <div className='part'>

      {/* {backimage.show &&
      <img src='./backTriangle_1.png'
        style={{
          width:'calc(20% * var(--dinamic))',
          position:'absolute',
          top:` ${backimage.top[0]}%`,
          left:` ${backimage.left[0]}%`}}/>
        }
          {backimage.show  &&
      <img src='./backTriangle_2.png'
        style={{
          width:'calc(20% * var(--dinamic))',
          position:'absolute',
          top:` ${backimage.top[1]}%`,
          left:` ${backimage.left[1]}%`}}/>
        } */}

      <section id={id} className={`main-section ${className}`} style={{backdropFilter: 'blur(20px)'}}>
        <h3 className='section_title'>{title}</h3>
        <div className='separator'
            style={{backgroundColor: color,
            boxShadow: `3px 0px 5px ${color}, -3px -0px 5px ${color}`}}>
            &nbsp;
        </div>
        <Grid container>
          <Grid item size={{'xs': 11, 'md': 7}}>
            <Box>
              <p className='section_description'>{data}</p>
            </Box>
          </Grid>
          {children}
        </Grid>
      </section>
    </div>
  )
}
