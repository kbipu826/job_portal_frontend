'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

// Dynamically import owl.carousel
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const ClientCarousel = () => {
  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };

  const clients = [
    { id: 1, image: '/images/client-logo/w1.png' },
    { id: 2, image: '/images/client-logo/w2.png' },
    { id: 3, image: '/images/client-logo/w3.png' },
    { id: 4, image: '/images/client-logo/w4.png' },
    { id: 5, image: '/images/client-logo/w5.png' },
    { id: 6, image: '/images/client-logo/w6.png' },
  ];

  return (
    <div className="section-content">
      <OwlCarousel className="home-client-carousel2 owl-btn-vertical-center" {...options}>
        {clients.map((client) => (
          <div key={client.id} className="item">
            <div className="ow-client-logo">
              <div className="client-logo client-logo-media">
                <a href="/employer-list">
                  <Image src={client.image} alt="client logo" width={150} height={50} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default ClientCarousel; 