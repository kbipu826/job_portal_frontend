import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import EmployeeSidebar from './EmployeeSidebar';
import '@/styles/EmployeeSidebar.css';

interface EmployeeLayoutProps {
  children: React.ReactNode;
}

const EmployeeLayout = ({ children }: EmployeeLayoutProps) => {
  const { data: session } = useSession();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="page-wraper">
      <header id="header-admin-wrap" className="header-admin-fixed">
        <div id="header-admin">
          <div className="container">
            <div className="header-left">
              <div className="nav-btn-wrap">
                <a className="nav-btn-admin" id="sidebarCollapse">
                  <span className="fa fa-angle-left"></span>
                </a>
              </div>
            </div>
            <div className="header-right">
              <ul className="header-widget-wrap">
                <li className="header-widget dashboard-message-dropdown">
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle jobzilla-admin-messange" id="ID-MSG_dropdown" data-bs-toggle="dropdown">
                      <i className="far fa-envelope"></i>
                      <span className="notification-animate">4</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="ID-MSG_dropdown">
                      <div className="message-list dashboard-widget-scroll">
                        <ul>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img src="/images/user-avtar/pic1.jpg" alt="" />
                            </span>
                            <div className="msg-texting">
                              <strong>Alexa Johnson</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5"></span>12 mins ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          {/* Add more message items as needed */}
                        </ul>
                        <div className="message-view-all">
                          <a href="javascript:;">View All</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-widget dashboard-noti-dropdown">
                  <div className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle jobzilla-admin-notification" id="ID-NOTI_dropdown" data-bs-toggle="dropdown">
                      <i className="far fa-bell"></i>
                      <span className="notification-animate">8</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="ID-NOTI_dropdown">
                      <div className="dashboard-widgets-header">You have 7 notifications</div>
                      <div className="noti-list dashboard-widget-scroll">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="noti-icon"><i className="far fa-bell"></i></span>
                              <span className="noti-texting">Devid applied for <b>Webdesigner.</b> </span> 
                            </a>
                          </li>
                          {/* Add more notification items as needed */}
                        </ul>
                        <div className="noti-view-all">
                          <a href="javascript:;">View All</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-widget">
                  <div className="dashboard-user-section">
                    <div className="listing-user">
                      <div className="dropdown">
                        <a href="javascript:;" className="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                          <div className="user-name text-black">
                            <span>
                              <img src="/images/user-avtar/pic4.jpg" alt="" />
                            </span>
                            {session?.user?.name || 'User'}
                          </div>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">
                          <ul>
                            <li><a href="/employee-dashboard"><i className="fa fa-home"></i>Dashboard</a></li>
                            <li><a href="/dash-messages"><i className="fa fa-envelope"></i> Messages</a></li>
                            <li><a href="/dash-my-profile"><i className="fa fa-user"></i> Profile</a></li>
                            <li><a href="#" onClick={handleLogout}><i className="fa fa-share-square"></i> Logout</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <EmployeeSidebar />
      
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