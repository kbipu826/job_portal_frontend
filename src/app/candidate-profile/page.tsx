'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import CandidateSidebar from '@/components/CandidateSidebar';
import { candidateProfileService } from '@/service/candidate/candidateProfile';
import type { CandidateProfile } from '@/types';
import Breadcrumb from '@/components/Breadcrumb';

const CandidateProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<CandidateProfile>>({
    name: '',
    phone: '',
    email: '',
    website: '',
    qualification: '',
    language: '',
    job_category: '',
    experience: '',
    current_salary: '',
    expected_salary: '',
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

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated') {
      fetchProfile();
    }
  }, [status, router]);

  const fetchProfile = async () => {
    try {
      const response = await candidateProfileService.getProfile();
      if (response.profile) {
        setFormData(response.profile);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBasicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const basicProfileData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        website: formData.website,
        qualification: formData.qualification,
        language: formData.language,
        job_category: formData.job_category,
        experience: formData.experience,
        current_salary: formData.current_salary,
        expected_salary: formData.expected_salary,
        age: formData.age,
        country: formData.country,
        city: formData.city,
        postcode: formData.postcode,
        address: formData.address,
        description: formData.description
      };

      const response = await candidateProfileService.saveBasicProfile(basicProfileData);
      if (response.success) {
        toast.success('Basic profile saved successfully');
      } else {
        toast.error(response.message || 'Failed to save basic profile');
      }
    } catch (error: any) {
      console.error('Error saving basic profile:', error);
      toast.error(error.response?.data?.message || 'Failed to save basic profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const socialLinksData = {
        facebook: formData.facebook,
        twitter: formData.twitter,
        linkedin: formData.linkedin,
        whatsapp: formData.whatsapp,
        instagram: formData.instagram,
        pinterest: formData.pinterest,
        tumblr: formData.tumblr,
        youtube: formData.youtube
      };

      const response = await candidateProfileService.saveSocialLinks(socialLinksData);
      if (response.success) {
        toast.success('Social links saved successfully');
      } else {
        toast.error(response.message || 'Failed to save social links');
      }
    } catch (error: any) {
      console.error('Error saving social links:', error);
      toast.error(error.response?.data?.message || 'Failed to save social links');
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

      <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="section-full bg-white content-inner-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 m-b30">
                <CandidateSidebar />
              </div>
              <div className="col-xl-9 col-lg-8 m-b30">
                <div className="twm-right-section-panel candidate-save-job site-bg-gray">
                  <form onSubmit={handleBasicSubmit}>
                    <div className="panel panel-default">
                      <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Basic Informations</h4>
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

                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Email Address</label>
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
                              <label>Qualification</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="qualification"
                                  type="text"
                                  placeholder="BTech"
                                  value={formData.qualification}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-user-graduate"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Language</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="language"
                                  type="text"
                                  placeholder="e.x English, Spanish"
                                  value={formData.language}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-language"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Job Category</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="job_category"
                                  type="text"
                                  placeholder="IT & Software"
                                  value={formData.job_category}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-border-all"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Experience</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="experience"
                                  type="text"
                                  placeholder="05 Years"
                                  value={formData.experience}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-user-edit"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Current Salary</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="current_salary"
                                  type="text"
                                  placeholder="65K"
                                  value={formData.current_salary}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-dollar-sign"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Expected Salary</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="expected_salary"
                                  type="text"
                                  placeholder="75K"
                                  value={formData.expected_salary}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-dollar-sign"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Age</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="age"
                                  type="text"
                                  placeholder="35 Years"
                                  value={formData.age}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-child"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
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
                                <i className="fs-input-icon fa fa-globe-americas"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>City</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="city"
                                  type="text"
                                  placeholder="Texas"
                                  value={formData.city}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fa fa-globe-americas"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Postcode</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="postcode"
                                  type="text"
                                  placeholder="75462"
                                  value={formData.postcode}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fas fa-map-pin"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                              <label>Full Address</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control"
                                  name="address"
                                  type="text"
                                  placeholder="1363-1385 Sunset Blvd Angeles, CA 90026 ,USA"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fas fa-map-marker-alt"></i>
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
                                placeholder="Greetings! when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
                                value={formData.description}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="text-left">
                              <button type="submit" className="site-button" disabled={loading}>
                                {loading ? 'Saving...' : 'Save Changes'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="twm-right-section-panel candidate-save-job site-bg-gray mt-4">
                  <form onSubmit={handleSocialSubmit}>
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

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Twitter</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
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

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Linkedin</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
                                  name="linkedin"
                                  type="text"
                                  placeholder="https://in.linkedin.com/"
                                  value={formData.linkedin}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-linkedin-in"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Whatsapp</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
                                  name="whatsapp"
                                  type="text"
                                  placeholder="https://www.whatsapp.com/"
                                  value={formData.whatsapp}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-whatsapp"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Instagram</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
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

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Pinterest</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
                                  name="pinterest"
                                  type="text"
                                  placeholder="https://in.pinterest.com/"
                                  value={formData.pinterest}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-pinterest-p"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Tumblr</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
                                  name="tumblr"
                                  type="text"
                                  placeholder="https://www.tumblr.com/"
                                  value={formData.tumblr}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-tumblr"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-4 col-lg-6 col-md-12">
                            <div className="form-group">
                              <label>Youtube</label>
                              <div className="ls-inputicon-box">
                                <input
                                  className="form-control wt-form-control"
                                  name="youtube"
                                  type="text"
                                  placeholder="https://www.youtube.com/"
                                  value={formData.youtube}
                                  onChange={handleInputChange}
                                />
                                <i className="fs-input-icon fab fa-youtube"></i>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-12 col-md-12">
                            <div className="text-left">
                              <button type="submit" className="site-button" disabled={loading}>
                                {loading ? 'Saving...' : 'Save Changes'}
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
    </div>
  );
};

export default CandidateProfile;
