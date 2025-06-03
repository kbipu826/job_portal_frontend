'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import EmployeeLayout from '@/components/EmployeeSidebar/EmployeeLayout';
import {
  JobFormData,
  JOB_CATEGORIES,
  JOB_TYPES,
  SALARY_RANGES,
  COUNTRIES,
  CITIES
} from '@/types/job';

const EmployerPostJob = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [formData, setFormData] = useState<JobFormData>({
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

  useEffect(() => {
    if (formData.country) {
      setAvailableCities(CITIES[formData.country as keyof typeof CITIES] || []);
    }
  }, [formData.country]);

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
      router.push('/dash-manage-jobs');
    } catch (error: any) {
      console.error('Error posting job:', error);
      toast.error(error.response?.data?.message || 'Failed to post job');
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmployeeLayout>
      <div className="content-admin-main">
        <div className="wt-admin-right-page-header clearfix">
          <h2>Post a New Job</h2>
          <div className="breadcrumbs"><a href="/">Home</a><span>Post Job</span></div>
        </div>

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
                          required
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
                          required
                        >
                          <option value="">Select Category</option>
                          {JOB_CATEGORIES.map(category => (
                            <option key={category.id} value={category.name}>
                              {category.name}
                            </option>
                          ))}
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
                          required
                        >
                          <option value="">Select Type</option>
                          {JOB_TYPES.map(type => (
                            <option key={type.id} value={type.name}>
                              {type.name}
                            </option>
                          ))}
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
                          required
                        >
                          <option value="">Select Salary</option>
                          {SALARY_RANGES.map((salary, index) => (
                            <option key={index} value={salary}>
                              {salary}
                            </option>
                          ))}
                        </select>
                        <i className="fs-input-icon fa fa-dollar-sign"></i>
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
                          required
                        >
                          <option value="">Select Country</option>
                          {COUNTRIES.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
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
                          required
                          disabled={!formData.country}
                        >
                          <option value="">Select City</option>
                          {availableCities.map((city, index) => (
                            <option key={index} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                        <i className="fs-input-icon fa fa-map-marker-alt"></i>
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
                          required
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
                          required
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
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <i className="fs-input-icon fa fa-venus-mars"></i>
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
                          required
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
                        required
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
                          required
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
                          required
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
    </EmployeeLayout>
  );
};

export default EmployerPostJob; 