'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Breadcrumb from '@/components/Breadcrumb';

const EmployerPostJob = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    job_title: '',
    job_category: '',
    job_type: '',
    offered_salary: '',
    experience: '',
    qualification: '',
    gender: '',
    country: '',
    city: '',
    location: '',
    latitude: '',
    longitude: '',
    email: '',
    website: '',
    est_since: '',
    address: '',
    description: '',
    start_date: '',
    end_date: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: Implement job posting API call
      toast.success('Job posted successfully');
    } catch (error: any) {
      console.error('Error posting job:', error);
      toast.error(error.response?.data?.message || 'Failed to post job');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-content">
      <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}>
        <div className="overlay-main site-bg-white opacity-01"></div>
        <div className="container">
          <div className="wt-bnr-inr-entry">
            <div className="banner-title-outer">
              <div className="banner-title-name">
                <h2 className="wt-title">Company Post A Job</h2>
              </div>
            </div>
            <div>
              <ul className="wt-breadcrumb breadcrumb-style-2">
                <li><a href="/">Home</a></li>
                <li>Company Post A Job</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-12 m-b30">
              <div className="twm-right-section-panel site-bg-gray">
                <form onSubmit={handleSubmit}>
                  <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                      <h4 className="panel-tittle m-a0"><i className="fa fa-suitcase"></i>Job Details</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30">
                      <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Job Title</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="job_title"
                                type="text"
                                placeholder="Enter job title"
                                value={formData.job_title}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-address-card"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Job Category</label>
                            <div className="ls-inputicon-box">
                              <select
                                className="wt-select-box selectpicker"
                                name="job_category"
                                value={formData.job_category}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Category</option>
                                <option>Accounting and Finance</option>
                                <option>IT and Computers</option>
                                <option>Management</option>
                                <option>Human Resources</option>
                              </select>
                              <i className="fs-input-icon fa fa-border-all"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Job Type</label>
                            <div className="ls-inputicon-box">
                              <select
                                className="wt-select-box selectpicker"
                                name="job_type"
                                value={formData.job_type}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Type</option>
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Freelance</option>
                                <option>Internship</option>
                              </select>
                              <i className="fs-input-icon fa fa-file-alt"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Offered Salary</label>
                            <div className="ls-inputicon-box">
                              <select
                                className="wt-select-box selectpicker"
                                name="offered_salary"
                                value={formData.offered_salary}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Salary</option>
                                <option>$500</option>
                                <option>$1000</option>
                                <option>$1500</option>
                                <option>$2000</option>
                              </select>
                              <i className="fs-input-icon fa fa-dollar-sign"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Experience</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="experience"
                                type="text"
                                placeholder="E.g. Minimum 3 years"
                                value={formData.experience}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-user-edit"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Qualification</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="qualification"
                                type="text"
                                placeholder="Qualification Title"
                                value={formData.qualification}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-user-graduate"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Gender</label>
                            <div className="ls-inputicon-box">
                              <select
                                className="wt-select-box selectpicker"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                              </select>
                              <i className="fs-input-icon fa fa-venus-mars"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Country</label>
                            <div className="ls-inputicon-box">
                              <select
                                className="wt-select-box selectpicker"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Country</option>
                                <option>USA</option>
                                <option>UK</option>
                                <option>Canada</option>
                                <option>Australia</option>
                              </select>
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>City</label>
                            <div className="ls-inputicon-box">
                              <select
                                className="wt-select-box selectpicker"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                              >
                                <option value="">Select City</option>
                                <option>New York</option>
                                <option>London</option>
                                <option>Toronto</option>
                                <option>Sydney</option>
                              </select>
                              <i className="fs-input-icon fa fa-map-marker-alt"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Location</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="location"
                                type="text"
                                placeholder="Type Address"
                                value={formData.location}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-map-marker-alt"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Latitude</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="latitude"
                                type="text"
                                placeholder="Enter latitude"
                                value={formData.latitude}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-map-pin"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Longitude</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="longitude"
                                type="text"
                                placeholder="Enter longitude"
                                value={formData.longitude}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-map-pin"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Email Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fas fa-at"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Website</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="website"
                                type="text"
                                placeholder="https://..."
                                value={formData.website}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-globe-americas"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Est. Since</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="est_since"
                                type="text"
                                placeholder="Since..."
                                value={formData.est_since}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-clock"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-12 col-lg-6 col-md-12">
                          <div className="form-group">
                            <label>Complete Address</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control"
                                name="address"
                                type="text"
                                placeholder="Enter complete address"
                                value={formData.address}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon fa fa-home"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              name="description"
                              rows={3}
                              placeholder="Enter job description"
                              value={formData.description}
                              onChange={handleInputChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Start Date</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control datepicker"
                                name="start_date"
                                type="date"
                                value={formData.start_date}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon far fa-calendar"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label>End Date</label>
                            <div className="ls-inputicon-box">
                              <input
                                className="form-control datepicker"
                                name="end_date"
                                type="date"
                                value={formData.end_date}
                                onChange={handleInputChange}
                              />
                              <i className="fs-input-icon far fa-calendar"></i>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="text-left">
                            <button type="submit" className="site-button m-r5" disabled={loading}>
                              {loading ? 'Publishing...' : 'Publish Job'}
                            </button>
                            <button type="button" className="site-button outline-primary">
                              Save Draft
                            </button>
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

export default EmployerPostJob; 