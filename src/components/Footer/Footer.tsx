import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-light ftr-light-with-bg site-bg-cover" style={{ backgroundImage: 'url(images/ftr-bg.jpg)' }}>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="widget widget_about">
                <div className="logo-footer clearfix">
                  <a href="index.html">
                    <img src="images/logo-light-2.png" alt="Logo" />
                  </a>
                </div>
                <p>Many desktop publishing packages and web page editors now.</p>
                <ul className="ftr-list">
                  <li>
                    <p><span>Address :</span>65 Sunset CA 90026, USA </p>
                  </li>
                  <li>
                    <p><span>Email :</span>example@max.com</p>
                  </li>
                  <li>
                    <p><span>Call :</span>555-555-1234</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">For Candidate</h3>
                    <ul>
                      <li><a href="candidate-dashboard">User Dashboard</a></li>
                      <li><a href="dash-resume-alert.html">Alert resume</a></li>
                      <li><a href="candidate-grid.html">Candidates</a></li>
                      <li><a href="blog-list.html">Blog List</a></li>
                      <li><a href="blog-single.html">Blog single</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">For Employers</h3>
                    <ul>
                      <li><a href="dash-post-job.html">Post Jobs</a></li>
                      <li><a href="blog-grid.html">Blog Grid</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><a href="job-list.html">Jobs Listing</a></li>
                      <li><a href="job-detail.html">Jobs details</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">Helpful Resources</h3>
                    <ul>
                      <li><a href="faq.html">FAQs</a></li>
                      <li><a href="employer-detail.html">Employer detail</a></li>
                      <li><a href="dash-my-profile.html">Profile</a></li>
                      <li><a href="error-404.html">404 Page</a></li>
                      <li><a href="pricing.html">Pricing</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">Quick Links</h3>
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li><a href="about-1.html">About us</a></li>
                      <li><a href="dash-bookmark.html">Bookmark</a></li>
                      <li><a href="job-grid.html">Jobs</a></li>
                      <li><a href="employer-list.html">Employer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-info">
            <div className="footer-copy-right">
              <span className="copyrights-text">Copyright © 2023 by thewebmax All Rights Reserved.</span>
            </div>
            <ul className="social-icons" style={{ display: 'flex', gap: '10px' }}>
              <li><a href="javascript:void(0);"><FaFacebookF /></a></li>
              <li><a href="javascript:void(0);"><FaTwitter /></a></li>
              <li><a href="javascript:void(0);"><FaInstagram /></a></li>
              <li><a href="javascript:void(0);"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;