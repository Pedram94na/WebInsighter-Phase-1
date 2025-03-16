import React, { useState } from 'react';
import './services.css';
import { Part } from '../../Components';
import { ServiceList } from './service-list';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [closing, setClosing] = useState(false);

  const serviceData = [
    { title: 'Web Development', img_url: '/services/vuesax-linear-monitor-recorder.png', description: 'Your website is your digital storefront. We specialize in creating responsive, user-friendly websites with seamless functionality and modern aesthetics that drive engagement and deliver results.' },
    { title: 'Social Media Marketing', img_url: '/services/vuesax-linear-mobile.png', description: 'Reach your audience where they are. Our social media strategies grow your online presence, foster engagement, and drive traffic to your site, ensuring your brand gets noticed and connected with its community.' },
    { title: 'Graphic Design', img_url: '/services/vuesax-linear-pen-tool-2.png', description: 'Visual appeal matters. Our expert graphic design team crafts custom designs that communicate your brand’s message clearly and effectively, leaving a lasting impression across all platforms.' },
    { title: 'Brand Identity', img_url: '/services/vuesax-linear-emoji-happy.png', description: 'Create a strong, memorable brand that resonates with your audience. At WebInsighter, we help you define your unique identity through thoughtful design and strategic positioning that builds trust and recognition.' },
    { title: 'SEO', img_url: '/services/vuesax-linear-search-status.png', description: 'Get found online. We optimize your website to rank higher on search engines, ensuring you attract quality traffic, improve visibility, and generate more leads for your business.' },
  ];

  const handleCardClick = (index) => {
    setExpandedIndex(index);
    setClosing(false);
  };

  const handleClose = () => {
    setClosing(true);
  };

  const handleAnimationEnd = () => {
    if (closing) {
      setExpandedIndex(null);
      setClosing(false);
    }
  };

  return (
    <Part id="service-part" title="Services"
     className="services"
      data=""
      color="#C52F91"
      backimage={{show: true, top:[15,16], left:[25,55]}}>
        <div id='services' className="messy-list">
          <ul>
            <h2>Rely on WebInsighter to elevate your brand and online presence</h2>
            
            {serviceData.map((service, index) => (
              <ServiceList
                key={index}
                service={service}
                isExpanded={expandedIndex === index}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </ul>
        </div>

        {expandedIndex !== null && (
          <div
            className={`expanded-view ${closing ? 'close' : 'open'}`}
            onAnimationEnd={handleAnimationEnd}
          >
            <button onClick={handleClose}>X</button>
            <div className='title'>
              <img src={serviceData[expandedIndex].img_url} alt={serviceData[expandedIndex].title} />
              <h2>{serviceData[expandedIndex].title}</h2>
            </div>
            <p>{serviceData[expandedIndex].description}</p>
          </div>
        )}
      </Part>
  );
}