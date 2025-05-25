'use client';

import React from 'react';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import { 
  FiCheck, 
  FiUpload,
  FiUser,
  FiBriefcase,
  FiFileText,
  FiHeadphones,
  FiBarChart2,
  FiTrendingUp,
  FiMonitor,
  FiCode
} from 'react-icons/fi';
import ClientCarousel from '../../components/ClientCarousel/ClientCarousel';

const AboutPage = () => {
  return (
    <>
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: 'url(/images/banner/banner-1.jpg)' }}>
          <div className="overlay-main site-bg-white opacity-01"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">About Us</h2>
                </div>
              </div>
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li><a href="/">Home</a></li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* JOBS CATEGORIES SECTION */}
        <div className="section-full p-t120 p-b90 site-bg-white twm-job-categories-area2">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Jobs by Categories</div>
            </div>
            <h2 className="wt-title">Choose Your Desire Category</h2>
          </div>

          <div className="container">
            <div className="twm-job-categories-section-2 m-b30">
              <div className="job-categories-style1 m-b30">
                <div className="row">
                  {[
                    { icon: <FiTrendingUp size={24} />, jobs: '9,185', title: 'Business Development' },
                    { icon: <FiBriefcase size={24} />, jobs: '3,205', title: 'Project Management' },
                    { icon: <FiFileText size={24} />, jobs: '2,100', title: 'Content Writer' },
                    { icon: <FiHeadphones size={24} />, jobs: '1,500', title: 'Customer Services' },
                    { icon: <FiBarChart2 size={24} />, jobs: '9,185', title: 'Finance' },
                    { icon: <FiTrendingUp size={24} />, jobs: '3,205', title: 'Marketing' },
                    { icon: <FiMonitor size={24} />, jobs: '2,100', title: 'Design & Art' },
                    { icon: <FiCode size={24} />, jobs: '1,500', title: 'Web Development' }
                  ].map((category, index) => (
                    <div key={index} className="col-lg-3 col-md-6">
                      <div className="job-categories-block-2 m-b30">
                        <div className="twm-media">
                          <div className="icon-wrapper">{category.icon}</div>
                        </div>
                        <div className="twm-content">
                          <div className="twm-jobs-available">{category.jobs} Jobs</div>
                          <a href="/job-detail">{category.title}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center job-categories-btn">
                <a href="/job-grid" className="site-button">All Categories</a>
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORK SECTION */}
        <div className="section-full p-t120 p-b90 site-bg-white twm-how-it-work-area2">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="section-head left wt-small-separator-outer">
                  <div className="wt-small-separator site-text-primary">
                    <div>How It Works</div>
                  </div>
                  <h2 className="wt-title">Follow our steps we will help you.</h2>
                </div>
                <ul className="description-list">
                  <li><FiCheck className="me-2" /> Trusted & Quality Job</li>
                  <li><FiCheck className="me-2" /> International Job</li>
                  <li><FiCheck className="me-2" /> No Extra Charge</li>
                  <li><FiCheck className="me-2" /> Top Companies</li>
                </ul>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="twm-w-process-steps-2-wrap">
                  <div className="row">
                    {[
                      {
                        number: '01',
                        color: 'sky',
                        icon: '/images/work-process/icon1.png',
                        title: 'Register Your Account',
                        description: 'You need to create an account to find the best and preferred job.'
                      },
                      {
                        number: '02',
                        color: 'yellow',
                        icon: '/images/work-process/icon4.png',
                        title: 'Search Your Job',
                        description: 'You need to create an account to find the best and preferred job.'
                      },
                      {
                        number: '03',
                        color: 'pink',
                        icon: '/images/work-process/icon3.png',
                        title: 'Apply For Dream Job',
                        description: 'You need to create an account to find the best and preferred job.'
                      },
                      {
                        number: '04',
                        color: 'green',
                        icon: '/images/work-process/icon3.png',
                        title: 'Upload Your Resume',
                        description: 'You need to create an account to find the best and preferred job.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="col-xl-6 col-lg-6 col-md-6">
                        <div className="twm-w-process-steps-2">
                          <div className={`twm-w-pro-top bg-clr-${step.color}-light bg-${step.color}-light-shadow`}>
                            <span className={`twm-large-number text-clr-${step.color}`}>{step.number}</span>
                            <div className="twm-media">
                              <span><Image src={step.icon} alt={`icon${index + 1}`} width={48} height={48} /></span>
                            </div>
                            <h4 className="twm-title">{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE NEW LIFE SECTION */}
        <div className="section-full p-t120 p-b120 twm-explore-area bg-cover" style={{ backgroundImage: 'url(/images/background/bg-1.jpg)' }}>
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <div className="twm-explore-media-wrap">
                    <div className="twm-media">
                      <Image 
                        src="/images/girl-large.png" 
                        alt="Explore new life" 
                        width={400} 
                        height={600}
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="twm-explore-content-outer">
                    <div className="twm-explore-content">
                      <div className="twm-l-line-1"></div>
                      <div className="twm-l-line-2"></div>
                      <div className="twm-r-circle-1"></div>
                      <div className="twm-r-circle-2"></div>
                      <div className="twm-title-small">Explore New Life</div>
                      <div className="twm-title-large">
                        <h2>Don't just find. be found put your CV in front of great employers</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.</p>
                      </div>
                      <div className="twm-upload-file">
                        <button type="button" className="site-button">
                          Upload Your Resume <FiUpload className="ms-2" />
                        </button>
                      </div>
                    </div>
                    <div className="twm-bold-circle-right"></div>
                    <div className="twm-bold-circle-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TOP COMPANIES SECTION */}
        <div className="section-full p-t120 site-bg-white twm-companies-wrap">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Top Companies</div>
            </div>
            <h2 className="wt-title">Get hired in top companies</h2>
          </div>

          <div className="container">
            <ClientCarousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage; 