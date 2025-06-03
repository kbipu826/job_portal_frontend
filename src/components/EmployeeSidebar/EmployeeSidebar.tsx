import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiMenu,
  FiHome,
  FiUser,
  FiBriefcase,
  FiUsers,
  FiBookmark,
  FiDollarSign,
  FiMessageSquare,
  FiBell,
  FiSettings,
  FiLock,
  FiTrash2,
  FiLogOut
} from 'react-icons/fi';

interface EmployeeSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobile: boolean;
  onMobileToggle: () => void;
}

const EmployeeSidebar = ({ isCollapsed, onToggleCollapse, isMobile, onMobileToggle }: EmployeeSidebarProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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

  const toggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
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
          <Link href="/">
            <img src="/images/logo-dark.png" alt="Jobzilla" />
          </Link>
        </div>
        
        {/* Desktop Toggle Button */}
        {!isMobile && (
          <button 
            className="sidebar-collapse-btn" 
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <FiChevronRight size={18} /> : <FiChevronLeft size={18} />}
          </button>
        )}

        <div className="admin-nav scrollbar-macosx">
          <ul>
            <li className={isActive('/employee-dashboard')}>
              <Link href="/employee-dashboard">
                <FiHome size={20} />
                <span className="admin-nav-text">Dashboard</span>
              </Link>
            </li>
            <li className={isActive('/dash-company-profile')}>
              <Link href="/dash-company-profile">
                <FiUser size={20} />
                <span className="admin-nav-text">Company Profile</span>
              </Link>
            </li>
            <li className={isActive('/dash-post-job') || isActive('/dash-manage-jobs')}>
              <a href="javascript:;" onClick={() => toggleSubmenu('jobs')}>
                <FiBriefcase size={20} />
                <span className="admin-nav-text">Jobs</span>
              </a>
              <ul className={`sub-menu ${openSubmenu === 'jobs' ? 'active' : ''}`}>
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
                <FiUsers size={20} />
                <span className="admin-nav-text">Candidates</span>
              </Link>
            </li>
            <li className={isActive('/dash-bookmark')}>
              <Link href="/dash-bookmark">
                <FiBookmark size={20} />
                <span className="admin-nav-text">Bookmark Resumes</span>
              </Link>
            </li>
            <li className={isActive('/dash-package')}>
              <Link href="/dash-package">
                <FiDollarSign size={20} />
                <span className="admin-nav-text">Packages</span>
              </Link>
            </li>
            <li className={isActive('/dash-messages')}>
              <a href="javascript:;" onClick={() => toggleSubmenu('messages')}>
                <FiMessageSquare size={20} />
                <span className="admin-nav-text">Messages <sup className="twm-msg-noti">5</sup></span>
              </a>
              <ul className={`sub-menu ${openSubmenu === 'messages' ? 'active' : ''}`}>
                <li>
                  <Link href="/dash-messages">
                    <span className="admin-nav-text">MSG Style-1</span>
                  </Link>
                </li>
                <li>
                  <Link href="/dash-messages_2">
                    <span className="admin-nav-text">MSG Style-2</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={isActive('/dash-resume-alert')}>
              <Link href="/dash-resume-alert">
                <FiBell size={20} />
                <span className="admin-nav-text">Resume Alerts</span>
              </Link>
            </li>
            <li className={isActive('/dash-my-profile')}>
              <Link href="/dash-my-profile">
                <FiSettings size={20} />
                <span className="admin-nav-text">My Profile</span>
              </Link>
            </li>
            <li className={isActive('/dash-change-password')}>
              <Link href="/dash-change-password">
                <FiLock size={20} />
                <span className="admin-nav-text">Change Password</span>
              </Link>
            </li>
            <li>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#delete-dash-profile">
                <FiTrash2 size={20} />
                <span className="admin-nav-text">Delete Profile</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#logout-dash-profile">
                <FiLogOut size={20} />
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