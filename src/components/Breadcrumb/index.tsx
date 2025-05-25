'use client';

import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  items: Array<{
    label: string;
    path: string;
  }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, items }) => {
  return (
    <div className="page-content bg-white">
      <div className="dez-bnr-inr overlay-black-dark" style={{ backgroundImage: "url('/images/banner/bnr1.jpg')" }}>
        <div className="container">
          <div className="dez-bnr-inr-entry">
            <h1 className="text-white">{title}</h1>
            <div className="breadcrumb-row">
              <ul className="list-inline">
                {items.map((item, index) => (
                  <li key={index}>
                    {index === items.length - 1 ? (
                      <span>{item.label}</span>
                    ) : (
                      <>
                        <Link href={item.path}>{item.label}</Link>
                        <i className="fa fa-angle-right"></i>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb; 