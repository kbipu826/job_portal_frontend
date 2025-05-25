'use client';

import React, { useState } from 'react';
import CandidateSidebar from '@/components/CandidateSidebar';
import Breadcrumb from '@/components/Breadcrumb';

const CandidateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    bio: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
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
                <li><a href="/">Home</a></li>
                <li>Candidate Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-block">
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 m-b30">
                <CandidateSidebar />
              </div>
              <div className="col-xl-9 col-lg-8 m-b30">
                <div className="twm-right-section-panel candidate-save-job site-bg-gray">
                  <form onSubmit={handleSubmit}>
                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Personal Details</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Full Name</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="fullName"
                                  type="text"
                                  placeholder="Devid Smith"
                                  value={formData.fullName}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-user"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Your Email</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="email"
                                  type="email"
                                  placeholder="Devid@example.com"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fas fa-at"></i>
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
                                <i className="fs-input-icon fas fa-phone-alt"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Website</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="website"
                                  type="text"
                                  placeholder="https://devsmith.net"
                                  value={formData.website}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-globe-americas"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Address</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="address"
                                  type="text"
                                  placeholder="1363-1385 Sunset Blvd Los Angeles, CA 90026, USA"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-home"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>City</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="city"
                                  type="text"
                                  placeholder="Los Angeles"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-building"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>State</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="state"
                                  type="text"
                                  placeholder="California"
                                  value={formData.state}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-map-marker-alt"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Zip</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="zip"
                                  type="text"
                                  placeholder="90026"
                                  value={formData.zip}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-map-pin"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Country</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="country"
                                  type="text"
                                  placeholder="USA"
                                  value={formData.country}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-flag"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Description</label>
                              <textarea
                                className="form-control"
                                name="bio"
                                rows={3}
                                placeholder="Greetings! I am Devid Smith, a professional UI/UX Designer with 2 years of experience. I am a passionate UI/UX Designer with a strong background in creating beautiful and functional user interfaces."
                                value={formData.bio}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Social Network</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Facebook</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
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
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Twitter</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="twitter"
                                  type="text"
                                  placeholder="https://twitter.com/"
                                  value={formData.twitter}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-twitter"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Linkedin</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="linkedin"
                                  type="text"
                                  placeholder="https://www.linkedin.com/"
                                  value={formData.linkedin}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-linkedin-in"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Instagram</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="instagram"
                                  type="text"
                                  placeholder="https://www.instagram.com/"
                                  value={formData.instagram}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-instagram"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Change Password</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Old Password</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="oldPassword"
                                  type="password"
                                  placeholder="********"
                                />
                                <i className="fs-input-icon fas fa-lock"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>New Password</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="newPassword"
                                  type="password"
                                  placeholder="********"
                                />
                                <i className="fs-input-icon fas fa-lock"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Confirm Password</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="confirmPassword"
                                  type="password"
                                  placeholder="********"
                                />
                                <i className="fs-input-icon fas fa-lock"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Profile Privacy</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Profile Visibility</label>
                              <div className="ls-inputicon-box">
                                <select className="wt-select-box selectpicker" data-live-search="true" title="" id="s-category" data-bv-field="size">
                                  <option className="bs-title-option" value="">Public</option>
                                  <option>Private</option>
                                  <option>Protected</option>
                                </select>
                                <i className="fs-input-icon fa fa-eye"></i>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Show Profile</label>
                              <div className="ls-inputicon-box">
                                <select className="wt-select-box selectpicker" data-live-search="true" title="" id="s-category" data-bv-field="size">
                                  <option className="bs-title-option" value="">Show Profile</option>
                                  <option>Hide Profile</option>
                                </select>
                                <i className="fs-input-icon fa fa-user"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Deactivate Account</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Deactivate Account</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="deactivate"
                                  type="text"
                                  placeholder="Deactivate Account"
                                />
                                <i className="fs-input-icon fa fa-ban"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Delete Account</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Delete Account</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="delete"
                                  type="text"
                                  placeholder="Delete Account"
                                />
                                <i className="fs-input-icon fa fa-trash"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Save Changes</h4>
                      </div>
                      <div className="panel-body wt-panel-body p-a20 m-b30">
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
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
    </div>
  );
};

export default CandidateProfile;
