"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FiBriefcase, FiLogIn, FiMenu, FiSearch, FiLogOut,FiUserPlus  } from 'react-icons/fi';
import LoginModal from '../Modal/LoginModal';
import SignUpModal from '../Modal/SignUpModal';
import { useSession, signOut } from 'next-auth/react';
import { USER_TYPE_ID } from '@/lib/constants';
import Sidebar from './Sidebar';

const Header = () => {
  const { data: session } = useSession();
  
  // State management for mobile side drawer
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // State for search
  const [searchOpen, setSearchOpen] = useState(false);

  // State for modals
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  // State for tabs in modals
  const [activeSignUpTab, setActiveSignUpTab] = useState('1');
  const [activeLoginTab, setActiveLoginTab] = useState('1');

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

  const handleLogout = () => {
    signOut();
  };

  const getDashboardLink = () => {
    if (!session?.user?.user_type_id) return '/candidate-dashboard';
    return session.user.user_type_id === String(USER_TYPE_ID.EMPLOYER) ? '/employee-dashboard' : '/candidate-dashboard';
  };

  return (
    <>
      {/* HEADER START */}
      <header className="site-header header-style-3 no-fixed mobile-sider-drawer-menu">
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar">
            <div className="container-fluid clearfix">
              <div className="logo-header">
                <div className="logo-header-inner logo-header-one">
                  <Link href="/">
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
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/jobs">Jobs</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
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
                    {!session ? (
                      <>
                        <div className="twm-nav-btn-left ">
                          <button
                            type='button'
                            className="custom-btn login-button"
                            onClick={openLoginModal}
                          >
                            <FiLogIn /> <span className='hidden-lg'>Log In</span>
                          </button>
                        </div>
                        <div className="twm-nav-btn-left" style={{ marginLeft: '10px' }}>
                          <button
                            type='button'
                            className="custom-btn"
                            onClick={openSignUpModal}
                          >
                            <FiUserPlus /> <span className='hidden-lg'>Sign Up</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="custom-btn1 twm-nav-post-a-job" style={{marginRight: '10px' }}>
                          <Link href={getDashboardLink()}>
                            <FiBriefcase /> <span className='hidden-lg'>Dashboard</span>
                          </Link>
                        </div>
                        <div className="twm-nav-btn-left">
                          <button
                            type='button'
                            className="custom-btn"
                            onClick={handleLogout}
                          >
                            <FiLogOut /> <span className='hidden-lg'>Logout</span>
                          </button>
                        </div>
                      </>
                    )}
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

      {/* Mobile Sidebar */}
      <Sidebar 
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenLogin={openLoginModal}
        onOpenSignUp={openSignUpModal}
      />

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