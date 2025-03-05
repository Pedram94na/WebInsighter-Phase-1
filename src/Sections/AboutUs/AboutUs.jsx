import React from 'react'
import { Part } from '../../Components'
import './about-us.css'

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
            At WebInsighter, we help businesses grow by building powerful websites, SEO strategies, and digital marketing campaigns. A strong online presence is essential, and we ensure your brand stands out with fast, responsive, and SEO-optimized websites that attract and convert visitors.<br /><br />
        
            Our expertise goes beyond web design. We create data-driven SEO, branding, UX/UI design, and PPC advertising strategies tailored to your goals. Whether it's improving search rankings, increasing traffic, or launching high-impact marketing campaigns, we focus on delivering measurable success.<br /><br />
            
            As the Co-Founder and Head of Sales at WebInsighter, I work closely with businesses to understand their needs and create solutions that drive growth. With a strong background in SEO, digital marketing, and business strategy, I help clients navigate the digital world and achieve real results. Let’s connect and build something great together.
            </p>
        <img src="/team/ayrat.jpg" alt="Ayrat" />
        </div>
    </Part>
  )
}
