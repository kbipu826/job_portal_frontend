import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiChevronLeft, FiChevronRight, FiMenu } from 'react-icons/fi';

interface EmployeeSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobile: boolean;
  onMobileToggle: () => void;
}

const EmployeeSidebar = ({ isCollapsed, onToggleCollapse, isMobile, onMobileToggle }: EmployeeSidebarProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    onMobileToggle();
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="mobile-menu-toggle"
        onClick={handleMobileToggle}
        aria-label="Toggle mobile menu"
      >
        <FiMenu size={24} />
      </button>

      {/* Sidebar */}
      <nav 
        id="sidebar-admin-wraper" 
        className={`${isCollapsed ? 'collapsed' : ''} ${isMobile ? 'mobile' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}
      >
        <div className="page-logo">
          <Link href="/"><img src="/images/logo-dark.png" alt="" /></Link>
        </div>
        
        {/* Desktop Toggle Button */}
        {!isMobile && (
          <button 
            className="sidebar-collapse-btn" 
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <FiChevronRight size={20} /> : <FiChevronLeft size={20} />}
          </button>
        )}

        <div className="admin-nav scrollbar-macosx">
          <ul>
            <li className={isActive('/employee-dashboard')}>
              <Link href="/employee-dashboard">
                <i className="fa fa-home"></i>
                <span className="admin-nav-text">Dashboard</span>
              </Link>
            </li>
            <li className={isActive('/dash-company-profile')}>
              <Link href="/dash-company-profile">
                <i className="fa fa-user-tie"></i>
                <span className="admin-nav-text">Company Profile</span>
              </Link>
            </li>
            <li className={isActive('/dash-post-job') || isActive('/dash-manage-jobs')}>
              <a href="javascript:;">
                <i className="fa fa-suitcase"></i>
                <span className="admin-nav-text">Jobs</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <Link href="/dash-post-job">
                    <span className="admin-nav-text">Post a New Jobs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dash-manage-jobs">
                    <span className="admin-nav-text">Manage Jobs</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={isActive('/dash-candidates')}>
              <Link href="/dash-candidates">
                <i className="fa fa-user-friends"></i>
                <span className="admin-nav-text">Candidates</span>
              </Link>
            </li>
            <li className={isActive('/dash-bookmark')}>
              <Link href="/dash-bookmark">
                <i className="fa fa-bookmark"></i>
                <span className="admin-nav-text">Bookmark Resumes</span>
              </Link>
            </li>
            <li className={isActive('/dash-package')}>
              <Link href="/dash-package">
                <i className="fa fa-money-bill-alt"></i>
                <span className="admin-nav-text">Packages</span>
              </Link>
            </li>
            <li className={isActive('/dash-messages')}>
              <Link href="/dash-messages">
                <i className="fa fa-envelope"></i>
                <span className="admin-nav-text">Messages <sup className="twm-msg-noti">5</sup></span>
              </Link>
            </li>
            <li className={isActive('/dash-resume-alert')}>
              <Link href="/dash-resume-alert">
                <i className="fa fa-bell"></i>
                <span className="admin-nav-text">Resume Alerts</span>
              </Link>
            </li>
            <li className={isActive('/dash-my-profile')}>
              <Link href="/dash-my-profile">
                <i className="fa fa-user"></i>
                <span className="admin-nav-text">My Profile</span>
              </Link>
            </li>
            <li className={isActive('/dash-change-password')}>
              <Link href="/dash-change-password">
                <i className="fa fa-fingerprint"></i>
                <span className="admin-nav-text">Change Password</span>
              </Link>
            </li>
            <li>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#delete-dash-profile">
                <i className="fa fa-trash-alt"></i>
                <span className="admin-nav-text">Delete Profile</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#logout-dash-profile">
                <i className="fa fa-share-square"></i>
                <span className="admin-nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={handleMobileToggle}></div>
      )}
    </>
  );
};

export default EmployeeSidebar; 