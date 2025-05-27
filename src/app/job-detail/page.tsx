import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiCheck } from 'react-icons/fi';
import dynamic from 'next/dynamic';

// Dynamically import the modal component with no SSR
const ApplyJobModal = dynamic(() => import('@/components/Modals/ApplyJobModal'), {
  ssr: false
});

export default function JobDetail() {
  return (
    <div className="page-wraper">
      {/* INNER PAGE BANNER */}
      <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}>
        <div className="overlay-main site-bg-white opacity-01"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">IT Department Manager</h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li><Link href="/">Home</Link></li>
                <li>Job Detail</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="section-full p-t120 p-b90 bg-white">
        <div className="container">
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              {/* Left Column */}
              <div className="col-lg-8 col-md-12">
                <div className="cabdidate-de-info">
                  <div className="twm-job-self-wrap">
                    <div className="twm-job-self-info">
                      <div className="twm-job-self-top">
                        <div className="twm-media-bg">
                          <Image 
                            src="/images/job-detail-bg.jpg" 
                            alt="Job Background"
                            width={800}
                            height={300}
                            className="img-fluid"
                          />
                          <div className="twm-jobs-category green">
                            <span className="twm-bg-green">New</span>
                          </div>
                        </div>

                        <div className="twm-mid-content">
                          <div className="twm-media">
                            <Image 
                              src="/images/jobs-company/pic1.jpg" 
                              alt="Company Logo"
                              width={100}
                              height={100}
                              className="img-fluid"
                            />
                          </div>

                          <h4 className="twm-job-title">
                            Senior Web Designer, Developer 
                            <span className="twm-job-post-duration">/ 1 days ago</span>
                          </h4>
                          
                          <p className="twm-job-address">
                            <FiMapPin /> 1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                          </p>

                          <div className="twm-job-self-mid">
                            <div className="twm-job-self-mid-left">
                              <a href="https://thewebmax.com" className="twm-job-websites site-text-primary">
                                https://thewebmax.com
                              </a>
                              <div className="twm-jobs-amount">$2000 - $2500 <span>/ Month</span></div>
                            </div>
                            <div className="twm-job-apllication-area">
                              Application ends: <span className="twm-job-apllication-date">October 1, 2025</span>
                            </div>
                          </div>

                          <div className="twm-job-self-bottom">
                            <button 
                              className="site-button" 
                              onClick={() => {
                                const modal = document.getElementById('apply_job_popup');
                                if (modal) {
                                  modal.style.display = 'block';
                                  modal.classList.add('show');
                                }
                              }}
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <h4 className="twm-s-title">Job Description:</h4>
                  <p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in 
                    ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum 
                    fugiat quo voluptas nulla pariatur?
                  </p>

                  {/* Requirements */}
                  <h4 className="twm-s-title">Requirements:</h4>
                  <ul className="description-list-2">
                    <li><FiCheck /> Must be able to communicate with others to convey information effectively.</li>
                    <li><FiCheck /> Personally passionate and up to date with current trends and technologies.</li>
                    <li><FiCheck /> Bachelor or Master degree level educational background.</li>
                    <li><FiCheck /> 4 years relevant PHP dev experience.</li>
                    <li><FiCheck /> Troubleshooting, testing and maintaining the core product software and databases.</li>
                  </ul>

                  {/* Responsibilities */}
                  <h4 className="twm-s-title">Responsibilities:</h4>
                  <ul className="description-list-2">
                    <li><FiCheck /> Establish and promote design guidelines, best practices and standards.</li>
                    <li><FiCheck /> Accurately estimate design tickets during planning sessions.</li>
                    <li><FiCheck /> Partnering with product and engineering to translate business and user goals.</li>
                    <li><FiCheck /> Create wireframes, storyboards, user flows, process flows and site maps.</li>
                    <li><FiCheck /> Present and defend designs and key deliverables to peers and executive level stakeholders.</li>
                  </ul>

                  {/* Share Profile */}
                  <h4 className="twm-s-title">Share Profile</h4>
                  <div className="twm-social-tags">
                    <a href="#" className="fb-clr">Facebook</a>
                    <a href="#" className="tw-clr">Twitter</a>
                    <a href="#" className="link-clr">Linkedin</a>
                    <a href="#" className="whats-clr">Whatsapp</a>
                    <a href="#" className="pinte-clr">Pinterest</a>
                  </div>

                  {/* Location Map */}
                  <h4 className="twm-s-title">Location</h4>
                  <div className="twm-m-map mb-5">
                    <div className="twm-m-map-iframe">
                      <iframe 
                        height="310" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-lg-4 col-md-12 rightSidebar">
                <div className="side-bar mb-4">
                  <div className="twm-s-info2-wrap mb-5">
                    <div className="twm-s-info2">
                      <h4 className="section-head-small mb-4">Job Information</h4>
                      <ul className="twm-job-hilites">
                        <li>
                          <i className="fas fa-calendar-alt"></i>
                          <span className="twm-title">Date Posted</span>
                        </li>
                        <li>
                          <i className="fas fa-eye"></i>
                          <span className="twm-title">8160 Views</span>
                        </li>
                        <li>
                          <i className="fas fa-file-signature"></i>
                          <span className="twm-title">6 Applicants</span>
                        </li>
                      </ul>

                      <ul className="twm-job-hilites2">
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-calendar-alt"></i>
                            <span className="twm-title">Date Posted</span>
                            <div className="twm-s-info-discription">April 22, 2023</div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-map-marker-alt"></i>
                            <span className="twm-title">Location</span>
                            <div className="twm-s-info-discription">Munchen, Germany</div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-user-tie"></i>
                            <span className="twm-title">Job Title</span>
                            <div className="twm-s-info-discription">Web Developer</div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-clock"></i>
                            <span className="twm-title">Experience</span>
                            <div className="twm-s-info-discription">3 Year</div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-suitcase"></i>
                            <span className="twm-title">Qualification</span>
                            <div className="twm-s-info-discription">Bachelor Degree</div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-venus-mars"></i>
                            <span className="twm-title">Gender</span>
                            <div className="twm-s-info-discription">Both</div>
                          </div>
                        </li>
                        <li>
                          <div className="twm-s-info-inner">
                            <i className="fas fa-money-bill-wave"></i>
                            <span className="twm-title">Offered Salary</span>
                            <div className="twm-s-info-discription">$2000-$2500 / Month</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Job Skills */}
                  <div className="widget tw-sidebar-tags-wrap">
                    <h4 className="section-head-small mb-4">Job Skills</h4>
                    <div className="tagcloud">
                      <a href="#">Html</a>
                      <a href="#">Python</a>
                      <a href="#">WordPress</a>
                      <a href="#">JavaScript</a>
                      <a href="#">Figma</a>
                      <a href="#">Angular</a>
                      <a href="#">Reactjs</a>
                      <a href="#">Drupal</a>
                      <a href="#">Joomla</a>
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="twm-s-info3-wrap mb-5">
                  <div className="twm-s-info3">
                    <div className="twm-s-info-logo-section">
                      <div className="twm-media">
                        <Image 
                          src="/images/jobs-company/pic1.jpg" 
                          alt="Company Logo"
                          width={100}
                          height={100}
                          className="img-fluid"
                        />
                      </div>
                      <h4 className="twm-title">Senior Web Designer, Developer</h4>
                    </div>
                    <ul>
                      <li>
                        <div className="twm-s-info-inner">
                          <i className="fas fa-building"></i>
                          <span className="twm-title">Company</span>
                          <div className="twm-s-info-discription">Software Development</div>
                        </div>
                      </li>
                      <li>
                        <div className="twm-s-info-inner">
                          <i className="fas fa-mobile-alt"></i>
                          <span className="twm-title">Phone</span>
                          <div className="twm-s-info-discription">+291 560 56456</div>
                        </div>
                      </li>
                      <li>
                        <div className="twm-s-info-inner">
                          <i className="fas fa-at"></i>
                          <span className="twm-title">Email</span>
                          <div className="twm-s-info-discription">thewebmaxdemo@gmail.com</div>
                        </div>
                      </li>
                      <li>
                        <div className="twm-s-info-inner">
                          <i className="fas fa-desktop"></i>
                          <span className="twm-title">Website</span>
                          <div className="twm-s-info-discription">https://themeforest.net</div>
                        </div>
                      </li>
                      <li>
                        <div className="twm-s-info-inner">
                          <i className="fas fa-map-marker-alt"></i>
                          <span className="twm-title">Address</span>
                          <div className="twm-s-info-discription">1363-1385 Sunset Blvd Angeles, CA 90026, USA</div>
                        </div>
                      </li>
                    </ul>
                    <Link href="/about" className="site-button">View Profile</Link>
                  </div>
                </div>

                {/* Advertisement */}
                <div className="twm-advertisment" style={{ backgroundImage: 'url(/images/add-bg.jpg)' }}>
                  <div className="overlay"></div>
                  <h4 className="twm-title">Recruiting?</h4>
                  <p>Get Best Matched Jobs On your <br /> Email. Add Resume NOW!</p>
                  <a href="#" className="site-button white">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Job Modal */}
      <ApplyJobModal 
        isOpen={false} 
        onClose={() => {
          const modal = document.getElementById('apply_job_popup');
          if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('show');
          }
        }} 
      />

      {/* Add script for modal functionality */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('apply_job_popup');
            const closeBtn = modal?.querySelector('.btn-close');
            
            if (closeBtn) {
              closeBtn.addEventListener('click', function() {
                if (modal) {
                  modal.style.display = 'none';
                  modal.classList.remove('show');
                }
              });
            }

            // Close modal when clicking outside
            window.addEventListener('click', function(event) {
              if (event.target === modal) {
                modal.style.display = 'none';
                modal.classList.remove('show');
              }
            });
          });
        `
      }} />
    </div>
  );
} 