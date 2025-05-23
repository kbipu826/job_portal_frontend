"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FiBriefcase, FiLogIn, FiMenu, FiSearch } from 'react-icons/fi';
import LoginModal from '../Modal/LoginModal';
import SignUpModal from '../Modal/SignUpModal';

const Header = () => {
  // State management for mobile side drawer
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // State for search
  const [searchOpen, setSearchOpen] = useState(false);

  // State for modals
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // State for tabs in modals
  const [activeSignUpTab, setActiveSignUpTab] = useState('candidate');
  const [activeLoginTab, setActiveLoginTab] = useState('candidate');

  // Toggle functions
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Handle modal state
  const openSignUpModal = () => {
    setSignUpModalOpen(true);
    setLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setSignUpModalOpen(false);
  };

  const closeModals = () => {
    setSignUpModalOpen(false);
    setLoginModalOpen(false);
  };

  // Search form ref
  const searchFormRef = useRef<HTMLFormElement>(null);

  return (
    <>
      {/* HEADER START */}
      <header className="site-header header-style-3 no-fixed mobile-sider-drawer-menu">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container-fluid clearfix">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link href="/index">
                    <Image src="/images/logo-dark.png" alt="Logo" width={150} height={50} />
                  </Link>
                </div>
              </div>

              {/* NAV Toggle Button */}
              <button
                id="mobile-side-drawer"
                type="button"
                className={`navbar-toggler ${mobileNavOpen ? '' : 'collapsed'}`}
                onClick={toggleMobileNav}
              >
                <FiMenu size={24} />
              </button>

              {/* MAIN Nav */}
              <div className={`nav-animation header-nav navbar-collapse collapse d-flex justify-content-center ${mobileNavOpen ? 'show' : ''}`}>
                <ul className="nav navbar-nav">
                  <li className="has-mega-menu">
                    <Link href="#" onClick={(e) => e.preventDefault()}>Home</Link>
                    <ul className="mega-menu">
                      <li>
                        <ul>
                          <li><Link href="/index">Home-1</Link></li>
                          <li><Link href="/index-2">Home-2</Link></li>
                          <li><Link href="/index-3">Home-3</Link></li>
                          <li><Link href="/index-4">Home-4</Link></li>
                          <li><Link href="/index-5">Home-5</Link></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><Link href="/index-6">Home-6</Link></li>
                          <li><Link href="/index-7">Home-7</Link></li>
                          <li><Link href="/index-8">Home-8</Link></li>
                          <li><Link href="/index-9">Home-9</Link></li>
                          <li><Link href="/index-10">Home-10</Link></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><Link href="/index-11">Home-11</Link></li>
                          <li><Link href="/index-12">Home-12</Link></li>
                          <li><Link href="/index-13">Home-13</Link></li>
                          <li><Link href="/index-14">Home-14</Link></li>
                          <li><Link href="/index-15">Home-15</Link></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li><Link href="/index-16">Home-16</Link></li>
                          <li><Link href="/index-17">Home-17</Link></li>
                          <li><Link href="/index-18">Home-18</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <Link href="#" onClick={(e) => e.preventDefault()}>Jobs</Link>
                    <ul className="sub-menu">
                      <li><Link href="/job-grid">Jobs Grid</Link></li>
                      <li><Link href="/job-grid-with-map">Jobs Grid with Map</Link></li>
                      <li><Link href="/job-list">Jobs List</Link></li>
                      <li className="has-child">
                        <Link href="#" onClick={(e) => e.preventDefault()}>Job Detail</Link>
                        <ul className="sub-menu">
                          <li><Link href="/job-detail">Detail 1</Link></li>
                          <li><Link href="/job-detail-v2">Detail 2</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/apply-job">Apply Jobs</Link></li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <Link href="#" onClick={(e) => e.preventDefault()}>Employers</Link>
                    <ul className="sub-menu">
                      <li><Link href="/employer-grid">Employers Grid</Link></li>
                      <li><Link href="/employer-list">Employers List</Link></li>
                      <li className="has-child">
                        <Link href="#" onClick={(e) => e.preventDefault()}>Employers Detail</Link>
                        <ul className="sub-menu">
                          <li><Link href="/employer-detail">Detail 1</Link></li>
                          <li><Link href="/employer-detail-v2">Detail 2</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/employer-profile">Profile</Link></li>
                      <li><Link href="/employer-resume">Resume</Link></li>
                      <li><Link href="/employer-manage-jobs">Manage Jobs</Link></li>
                      <li><Link href="/employer-post-job">Post A Jobs</Link></li>
                      <li><Link href="/employer-transaction">Transaction</Link></li>
                      <li><Link href="/candidate-grid">Browse Candidates</Link></li>
                      <li><Link href="/employer-change-password">Change Password</Link></li>
                      <li><Link href="/employer-account-fresher">Register Fresher</Link></li>
                      <li><Link href="/employer-account-professional">Register Professionals</Link></li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <Link href="#" onClick={(e) => e.preventDefault()}>Pages</Link>
                    <ul className="sub-menu">
                      <li><Link href="/about-1">About Us</Link></li>
                      <li><Link href="/pricing">Pricing</Link></li>
                      <li><Link href="/error-404">Error-404</Link></li>
                      <li><Link href="/faq">FAQ&apos;s</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/under-maintenance">Under Maintenance</Link></li>
                      <li><Link href="/coming-soon">Coming soon</Link></li>
                      <li><Link href="/login">Login</Link></li>
                      <li><Link href="/after-login">After Login</Link></li>
                      <li><Link href="/icons">Icons</Link></li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <Link href="#" onClick={(e) => e.preventDefault()}>Candidates</Link>
                    <ul className="sub-menu">
                      <li><Link href="/candidate-grid">Candidates Grid</Link></li>
                      <li><Link href="/candidate-list">Candidates List</Link></li>
                      <li className="has-child">
                        <Link href="#" onClick={(e) => e.preventDefault()}>Candidate Detail</Link>
                        <ul className="sub-menu">
                          <li><Link href="/candidate-detail">Detail 1</Link></li>
                          <li><Link href="/candidate-detail-v2">Detail 2</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/candidate-dashboard">Dashboard</Link></li>
                      <li><Link href="/candidate-profile">My Profile</Link></li>
                      <li><Link href="/candidate-jobs-applied">Applied Jobs</Link></li>
                      <li><Link href="/candidate-my-resume">My Resume</Link></li>
                      <li><Link href="/candidate-saved-jobs">Saved Jobs</Link></li>
                      <li><Link href="/candidate-cv-manager">CV Manager</Link></li>
                      <li><Link href="/candidate-job-alert">Job Alerts</Link></li>
                      <li><Link href="/candidate-change-password">Change Password</Link></li>
                      <li><Link href="/candidate-chat">Chat</Link></li>
                    </ul>
                  </li>
                  <li className="has-child">
                    <Link href="#" onClick={(e) => e.preventDefault()}>Blog</Link>
                    <ul className="sub-menu">
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/blog-grid">Blog Grid</Link></li>
                      <li><Link href="/blog-grid-2">Blog Grid-2</Link></li>
                      <li><Link href="/blog-list">Blog List</Link></li>
                      <li><Link href="/blog-single">Blog Detail</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Header Right Section */}
              <div className="extra-nav header-2-nav">
                <div className="extra-cell">
                  <div className="header-search">
                    <a href="#" className="header-search-icon" onClick={(e) => {
                      e.preventDefault();
                      toggleSearch();
                    }}>
                      <FiSearch />
                    </a>
                  </div>
                </div>
                <div className="extra-cell">
                  <div className="header-nav-btn-section">
                    <div className="twm-nav-btn-left">
                      <button
                      type='button'
                        className="custom-btn"
                        onClick={openSignUpModal}
                      >
                        <FiLogIn /> Sign Up
                      </button>
                    </div>
                    <div className="custom-btn1">
                      <Link href="/dash-post-job" className="twm-nav-post-a-job">
                        <FiBriefcase /> Post a job
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SITE Search */}
          <div id="search" className={searchOpen ? 'open' : ''}>
            <span className="close" onClick={toggleSearch}></span>
            <form
              role="search"
              id="searchform"
              action="/search"
              method="get"
              className="radius-xl"
              ref={searchFormRef}
            >
              <input
                className="form-control"
                name="q"
                type="search"
                placeholder="Type to search"
              />
              <span className="input-group-append">
                <button type="button" className="search-btn">
                  <FiSearch />
                </button>
              </span>
            </form>
          </div>
        </div>
      </header>
      {/* HEADER END */}

      {/* Sign Up Modal */}
      {signUpModalOpen && !loginModalOpen && (
        <SignUpModal
          isOpen={signUpModalOpen}
          onClose={closeModals}
          activeTab={activeSignUpTab}
          onTabChange={setActiveSignUpTab}
          onSwitchToLogin={openLoginModal}
        />
      )}

      {/* Login Modal */}
      {loginModalOpen && !signUpModalOpen && (
        <LoginModal
          isOpen={loginModalOpen}
          onClose={closeModals}
          activeTab={activeLoginTab}
          onTabChange={setActiveLoginTab}
          onSwitchToSignUp={openSignUpModal}
        />
      )}

      {/* Backdrop for modals */}
      {(signUpModalOpen || loginModalOpen) && (
        <div 
          className="modal-backdrop fade show" 
          onClick={closeModals}
        ></div>
      )}
    </>
  );
};

export default Header;