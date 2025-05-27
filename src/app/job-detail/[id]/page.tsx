'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { FiMapPin, FiCalendar, FiEye, FiFileText, FiCheck } from 'react-icons/fi';
import Link from 'next/link';
import styles from './JobDetail.module.css';

const JobDetail = () => {
  const params = useParams();
  const jobId = params.id;

  return (
    <div className={styles.pageContent}>
      {/* INNER PAGE BANNER */}
      <div className={styles.banner} style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}>
        <div className={styles.bannerOverlay}></div>
        <div className="container">
          <div className={styles.bannerContent}>
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">IT Department Manager</h2>
              </div>
            </div>
            {/* BREADCRUMB ROW */}
            <div>
              <ul className={styles.breadcrumb}>
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
                <div className={styles.jobInfo}>
                  <div className={styles.jobHeader}>
                    <img src="/images/job-detail-bg.jpg" alt="#" />
                    <div className={styles.jobCategory}>New</div>
                  </div>

                  <div className={styles.jobContent}>
                    <img src="/images/jobs-company/pic1.jpg" alt="#" className={styles.companyLogo} />

                    <h4 className={styles.jobTitle}>
                      Senior Web Designer, Developer <span className={styles.jobDuration}>/ 1 days ago</span>
                    </h4>
                    <p className={styles.jobAddress}>
                      <FiMapPin /> 1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                    </p>
                    <div className={styles.jobMeta}>
                      <div>
                        <a href="https://themeforest.net/user/thewebmax/portfolio" className={styles.jobWebsite}>
                          https://thewebmax.com
                        </a>
                        <div className={styles.jobSalary}>$2000 - $2500 <span>/ Month</span></div>
                      </div>
                      <div>
                        Application ends: <span>October 1, 2025</span>
                      </div>
                    </div>

                    <button className={styles.applyButton} data-bs-toggle="modal" data-bs-target="#apply_job_popup">
                      Apply Now
                    </button>
                  </div>
                </div>

                <h4 className={styles.sectionTitle}>Job Description:</h4>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <h4 className={styles.sectionTitle}>Requirements:</h4>
                <ul className={styles.descriptionList}>
                  <li><FiCheck /> Must be able to communicate with others to convey information effectively.</li>
                  <li><FiCheck /> Personally passionate and up to date with current trends and technologies.</li>
                  <li><FiCheck /> Bachelor or Master degree level educational background.</li>
                  <li><FiCheck /> 4 years relevant PHP dev experience.</li>
                  <li><FiCheck /> Troubleshooting, testing and maintaining the core product software and databases.</li>
                </ul>

                <h4 className={styles.sectionTitle}>Responsibilities:</h4>
                <ul className={styles.descriptionList}>
                  <li><FiCheck /> Establish and promote design guidelines, best practices and standards.</li>
                  <li><FiCheck /> Accurately estimate design tickets during planning sessions.</li>
                  <li><FiCheck /> Partnering with product and engineering to translate business and user goals.</li>
                  <li><FiCheck /> Create wireframes, storyboards, user flows, process flows and site maps.</li>
                  <li><FiCheck /> Present and defend designs and key deliverables to peers and executive level stakeholders.</li>
                </ul>

                <h4 className={styles.sectionTitle}>Share Profile</h4>
                <div className={styles.socialTags}>
                  <a href="javascript:void(0)" className={styles.fbClr}>Facebook</a>
                  <a href="javascript:void(0)" className={styles.twClr}>Twitter</a>
                  <a href="javascript:void(0)" className={styles.linkClr}>Linkedin</a>
                  <a href="javascript:void(0)" className={styles.whatsClr}>Whatsapp</a>
                  <a href="javascript:void(0)" className={styles.pinteClr}>Pinterest</a>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="col-lg-4 col-md-12">
                <div className={styles.sidebar}>
                  <h4 className={styles.sectionTitle}>Job Information</h4>
                  <ul className={styles.infoList}>
                    <li>
                      <FiCalendar />
                      <span>Date Posted</span>
                    </li>
                    <li>
                      <FiEye />
                      <span>8160 Views</span>
                    </li>
                    <li>
                      <FiFileText />
                      <span>6 Applicants</span>
                    </li>
                  </ul>

                  <h4 className={styles.sectionTitle}>Job Skills</h4>
                  <div className={styles.tagCloud}>
                    <a href="javascript:void(0)">Html</a>
                    <a href="javascript:void(0)">Python</a>
                    <a href="javascript:void(0)">WordPress</a>
                    <a href="javascript:void(0)">JavaScript</a>
                    <a href="javascript:void(0)">Figma</a>
                    <a href="javascript:void(0)">Angular</a>
                    <a href="javascript:void(0)">Reactjs</a>
                    <a href="javascript:void(0)">Drupal</a>
                    <a href="javascript:void(0)">Joomla</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail; 