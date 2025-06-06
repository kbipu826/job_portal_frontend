import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import EmployeeSidebar from './EmployeeSidebar';
import EmployeeHeader from './EmployeeHeader';
import '@/styles/EmployeeSidebar.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

interface EmployeeLayoutProps {
  children: React.ReactNode;
}

const EmployeeLayout = ({ children }: EmployeeLayoutProps) => {
  const { data: session } = useSession();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 991;
      setIsMobile(isMobileView);
      if (isMobileView) {
        setIsSidebarCollapsed(true);
      }
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogout = () => {
    signOut();
  };

  const toggleSidebar = () => {
    if (!isMobile) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="page-wraper">
      <EmployeeSidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggleCollapse={toggleSidebar}
        isMobile={isMobile}
        onMobileToggle={toggleMobileMenu}
      />

      <EmployeeHeader 
        isSidebarCollapsed={isSidebarCollapsed}
        onToggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />

      <div id="content" className={isSidebarCollapsed ? 'sidebar-collapsed' : ''}>
        {children}
      </div>

      {/* Delete Profile Modal */}
      <div className="modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h4 className="modal-title">Do you want to delete your profile?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
              <button type="button" className="site-button outline-primary">Yes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Profile Modal */}
      <div className="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h4 className="modal-title">Do you want to Logout your profile?</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
              <button type="button" className="site-button outline-primary" onClick={handleLogout}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLayout; 