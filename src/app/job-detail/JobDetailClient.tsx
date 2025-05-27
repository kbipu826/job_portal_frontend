'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const ApplyJobModal = dynamic(() => import('@/components/Modals/ApplyJobModal'), {
  ssr: false
});

export default function JobDetailClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="twm-job-self-bottom">
        <button 
          className="site-button" 
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>
      </div>
      <ApplyJobModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
} 