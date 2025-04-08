import React, { useState } from 'react';

export const ServiceList = ({ key, service, isExpanded, onClick  }) => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength)
            return text.substring(0, maxLength) + '...';

        return text;
    };

    return (
        <li data-id={key} onClick={onClick}
            className={isExpanded ? 'expanded' : ''}
        >
            <div>
                <img src={service.img_url} alt={service.title} />
                <h2>{service.title}</h2>
            </div>
            <p style={{ maxWidth: '300px' }}>{truncateText(service.description, 100)}</p>
            <img src='/services/vuesax-linear-arrow-square-up.png' alt="Arrow" />
        </li>
    );
}