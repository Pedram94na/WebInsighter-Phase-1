import React from 'react'
import { Part } from '../../Components'
import './about-us.css'
import { team } from './team'

export default function AboutUs() {

  return (
    <Part title='About Us'
    id='about-us'
    data=''
    color='#A3C52F'
    backimage={{show:true, top:[25,27], left:[45,60]}}
    >
        <div className='about-us_content__div'>
          <p className='about-us_content__text'>
          At <strong style={{ color: '#C52F91' }}>WebInsighter</strong>, Digital Growth is a strategy, not just a service. We specialize in Web Design, SEO, and Digital Marketing, creating websites that are <strong style={{ color: '#C52F91' }}>fast, visually engaging, and optimized for results</strong>. From <strong style={{ color: '#C52F91' }}>high-performance websites</strong> to <strong style={{ color: '#C52F91' }}>conversion-driven marketing campaigns</strong>, we help businesses build a strong online presence and stand out in a competitive market.
          </p>

          <div className='team'>
              {team()}
          </div>
        </div>
    </Part>
  )
}
