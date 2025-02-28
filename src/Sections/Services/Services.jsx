import React from 'react'
import './services.css'
import { Part } from '../../Components'

export default function Services() {
  return (
    <Part title="Our services"
     className="services"
      data=" In today’s digital world, having a website isn’t enough. You need a high-performance, user-friendly website that ranks on Google and turns visitors into paying customers. That’s exactly what we deliver.
"
      color="#C52F91"
      backimage={{show: true, top:[15,16], left:[25,55]}}>
        <div id='services' className="messy-list">
          <ul>
          <li>
              Responsive Web design
            </li>
            <li>
              Digital marketing and more
            </li>
            <li>
              Search Engine Optimization
            </li>
            <li>
              Graphic design and visual branding
            </li>
            <li>
              Social media management
            </li>
            <li>
              Mobile application development
            </li>
            <li>
              Artificial intelligence development
            </li>
          </ul>
        </div>
      </Part>
  )
}
