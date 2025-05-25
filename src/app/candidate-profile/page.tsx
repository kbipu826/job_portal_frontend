'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CandidateProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    qualification: '',
    language: '',
    jobCategory: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    age: '',
    country: '',
    city: '',
    postcode: '',
    address: '',
    description: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    whatsapp: '',
    instagram: '',
    pinterest: '',
    tumblr: '',
    youtube: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="page-content">
      {/* Banner Section */}
      <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}>
        <div className="overlay-main site-bg-white opacity-01"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">Candidate Profile</h2>
              </div>
            </div>
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li><Link href="/">Home</Link></li>
                <li>Candidate Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">
              <div className="side-bar-st-1">
                <div className="twm-candidate-profile-pic">
                  <Image 
                    src="/images/user-avtar/pic4.jpg" 
                    alt="Profile" 
                    width={150} 
                    height={150}
                    className="rounded-circle"
                  />
                  <div className="upload-btn-wrapper">
                    <div id="upload-image-grid"></div>
                    <button className="site-button button-sm">Upload Photo</button>
                    <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
                  </div>
                </div>
                <div className="twm-mid-content text-center">
                  <Link href="/candidate-detail" className="twm-job-title">
                    <h4>Randall Henderson</h4>
                  </Link>
                  <p>IT Contractor</p>
                </div>
                <div className="twm-nav-list-1">
                  <ul>
                    <li><Link href="/candidate-dashboard"><i className="fa fa-tachometer-alt"></i> Dashboard</Link></li>
                    <li className="active"><Link href="/candidate-profile"><i className="fa fa-user"></i> My Profile</Link></li>
                    <li><Link href="/candidate-jobs-applied"><i className="fa fa-suitcase"></i> Applied Jobs</Link></li>
                    <li><Link href="/candidate-my-resume"><i className="fa fa-receipt"></i> My Resume</Link></li>
                    <li><Link href="/candidate-saved-jobs"><i className="fa fa-file-download"></i> Saved Jobs</Link></li>
                    <li><Link href="/candidate-cv-manager"><i className="fa fa-paperclip"></i> CV Manager</Link></li>
                    <li><Link href="/candidate-job-alert"><i className="fa fa-bell"></i> Job Alerts</Link></li>
                    <li><Link href="/candidate-change-password"><i className="fa fa-fingerprint"></i> Change Password</Link></li>
                    <li><Link href="/candidate-chat"><i className="fa fa-comments"></i> Chat</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Form */}
            <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
              <div className="twm-right-section-panel site-bg-gray">
                <form onSubmit={handleSubmit}>
                  {/* Basic Information */}
                  <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                      <h4 className="panel-tittle m-a0">Basic Information</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Your Name</label>
                            <div className="ls-inputicon-box">
                              <input 
                                className="form-control" 
                                name="name" 
                                type="text" 
                                placeholder="Devid Smith"
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-user"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Phone</label>
                            <div className="ls-inputicon-box">
                              <input 
                                className="form-control" 
                                name="phone" 
                                type="text" 
                                placeholder="(251) 1234-456-7890"
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-phone-alt"></i>
                            </div>
                          </div>
                        </div>

                        {/* Add more form fields following the same pattern */}
                        
                        <div className="col-lg-12 col-md-12">
                          <div className="text-left">
                            <button type="submit" className="site-button">Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Network */}
                  <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                      <h4 className="panel-tittle m-a0">Social Network</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Facebook</label>
                            <div className="ls-inputicon-box">
                              <input 
                                className="form-control wt-form-control" 
                                name="facebook" 
                                type="text" 
                                placeholder="https://www.facebook.com/"
                                value={formData.facebook}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fab fa-facebook-f"></i>
                            </div>
                          </div>
                        </div>

                        {/* Add more social media fields following the same pattern */}

                        <div className="col-lg-12 col-md-12">
                          <div className="text-left">
                            <button type="submit" className="site-button">Save Changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
