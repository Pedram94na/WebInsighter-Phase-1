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
            <li>Brand Identity</li>
            <li>Graphic Design</li>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Social Media Marketing</li>
            <li>Search Engine Optimization</li>
            <li>Automation Systems</li>
          </ul>
        </div>
      </Part>
  )
}




