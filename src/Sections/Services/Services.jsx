import React from 'react'
import './services.css'
import { Part } from '../../Components'

export default function Services() {
  return (
    <Part id="service-part" title="Services"
     className="services"
      data=""
      color="#C52F91"
      backimage={{show: true, top:[15,16], left:[25,55]}}>
        <p>
        In today’s digital world, having a website isn’t enough. You need a high-performance, user-friendly website that ranks on Google and turns visitors into paying customers. That’s exactly what we deliver.
        </p>
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
