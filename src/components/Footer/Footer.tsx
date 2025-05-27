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
                  <a href="/">
                    <img src="images/TrainingSolutionsLogo.png" alt="Logo" />
                  </a>
                </div>
                <br />
                {/* <p>Many desktop publishing packages and web page editors now.</p> */}
                <ul className="ftr-list">
                  <li>
                    <p><span>Address :</span>Laxmi Nagar 110091, NEW DELHI, INDIA </p>
                  </li>
                  <li>
                    <p><span>Email :</span>bipulkumar3103@gmail.com</p>
                  </li>
                  <li>
                    <p><span>Call :</span>+91 9958126556</p>
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
                      <li><a href="/candidate-dashboard">User Dashboard</a></li>
                      <li><a href="/dash-resume-alert">Alert resume</a></li>
                      <li><a href="/candidate-grid">Candidates</a></li>
                      <li><a href="/blog-list">Blog List</a></li>
                      <li><a href="/blog-single">Blog single</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">For Employers</h3>
                    <ul>
                      <li><a href="/dash-post-job">Post Jobs</a></li>
                      <li><a href="/blog-grid">Blog Grid</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/jobs">Jobs Listing</a></li>
                      <li><a href="/job-detail">Jobs details</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">Helpful Resources</h3>
                    <ul>
                      <li><a href="/faq">FAQs</a></li>
                      <li><a href="/employer-detail">Employer detail</a></li>
                      <li><a href="/dash-my-profile">Profile</a></li>
                      <li><a href="/error-404">404 Page</a></li>
                      <li><a href="/pricing">Pricing</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="widget widget_services ftr-list-center">
                    <h3 className="widget-title">Quick Links</h3>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About us</a></li>
                      <li><a href="/dash-bookmark">Bookmark</a></li>
                      <li><a href="/jobs">Jobs</a></li>
                      <li><a href="/employer-list">Employer</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-info ">
            <div className="footer-copy-right ">
              <span className="copyrights-text">Copyright © 2025 by Bipul</span>
            </div>
            <ul className="social-icons" style={{ display: 'flex', gap: '10px' }}>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#;"><FaTwitter /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;