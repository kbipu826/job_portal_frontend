'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

const Dashboard = () => {
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
                              <img src="images/user-avtar/pic1.jpg" alt="" />
                            </span>
                            <div className="msg-texting">
                              <strong>Alexa Johnson</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5"></span>12 mins ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img src="images/user-avtar/pic2.jpg" alt="" />
                            </span>
                            <div className="msg-texting">
                              <strong>Johan Smith</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5"></span>2 hours ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img src="images/user-avtar/pic3.jpg" alt="" />
                            </span>
                            <div className="msg-texting">
                              <strong>Bobby Brown</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5"></span>3 hours ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
                          <li className="clearfix">
                            <span className="msg-avtar">
                              <img src="images/user-avtar/pic4.jpg" alt="" />
                            </span>
                            <div className="msg-texting">
                              <strong>David Deo</strong>
                              <small className="msg-time">
                                <span className="far fa-clock p-r-5"></span>4 hours ago
                              </small>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                          </li>
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
                          <li>
                            <a href="#">
                              <span className="noti-icon"><i className="far fa-bell"></i></span>
                              <span className="noti-texting">Nikol sent you a message. </span> 
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="noti-icon"><i className="far fa-bell"></i></span>
                              <span className="noti-texting">lucy bookmarked your <b>SEO Expert</b> Job! </span> 
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="noti-icon"><i className="far fa-bell"></i></span>
                              <span className="noti-texting">Your job for <b>teacher</b> has been approved! </span> 
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="noti-icon"><i className="far fa-bell"></i></span>
                              <span className="noti-texting">Thor applied for <b>Team Leader</b>. </span> 
                            </a>
                          </li>
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
                              <img src="images/user-avtar/pic4.jpg" alt="" />
                            </span>Nikola Tesla
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
      <nav id="sidebar-admin-wraper">
        <div className="page-logo">
          <a href="/"><img src="images/logo-dark.png" alt="" /></a>
        </div>
        <div className="admin-nav scrollbar-macosx">
          <ul>
            <li className="active">
              <a href="/employee-dashboard"><i className="fa fa-home"></i><span className="admin-nav-text">Dashboard</span></a>
            </li>
            <li>
              <a href="/dash-company-profile"><i className="fa fa-user-tie"></i><span className="admin-nav-text">Company Profile</span></a>
            </li>
            <li>
              <a href="javascript:;"><i className="fa fa-suitcase"></i><span className="admin-nav-text">Jobs</span></a>
              <ul className="sub-menu">
                <li> <a href="/dash-post-job"><span className="admin-nav-text">Post a New Jobs</span></a></li>
                <li> <a href="/dash-manage-jobs"><span className="admin-nav-text">Manage Jobs</span></a></li>
              </ul>
            </li>
            <li>
              <a href="/dash-candidates"><i className="fa fa-user-friends"></i><span className="admin-nav-text">Candidates</span></a>
            </li>
            <li>
              <a href="/dash-bookmark"><i className="fa fa-bookmark"></i><span className="admin-nav-text">Bookmark Resumes</span></a>
            </li>
            <li>
              <a href="/dash-package"><i className="fa fa-money-bill-alt"></i><span className="admin-nav-text">Packages</span></a>
            </li>
            <li>
              <a href="javascript:;"><i className="fa fa-envelope"></i><span className="admin-nav-text">Messages <sup className="twm-msg-noti">5</sup></span></a>
              <ul className="sub-menu">
                <li> <a href="dash-messages"><span className="admin-nav-text">My Message</span></a></li>
              </ul>
            </li>
            <li>
              <a href="/dash-resume-alert"><i className="fa fa-bell"></i><span className="admin-nav-text">Resume Alerts</span></a>
            </li>
            <li>
              <a href="/dash-my-profile"><i className="fa fa-user"></i><span className="admin-nav-text">My Profile</span></a>
            </li>
            <li>
              <a href="/dash-change-password"><i className="fa fa-fingerprint"></i><span className="admin-nav-text">Change Password</span></a>
            </li>
            <li>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#delete-dash-profile"><i className="fa fa-trash-alt"></i><span className="admin-nav-text">Delete Profile</span></a>
            </li>
            <li>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#logout-dash-profile"><i className="fa fa-share-square"></i><span className="admin-nav-text">Logout</span></a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="content">
        <div className="content-admin-main">
          <div className="wt-admin-right-page-header clearfix">
            <h2>Hello, Nikola Tesla</h2>
            <div className="breadcrumbs"><a href="#">Home</a><span>Dasboard</span></div>
          </div>
          <div className="twm-dash-b-blocks mb-5">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-1 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon"><i className="far fa-address-book"></i></div>
                      <div className="wt-card-right wt-total-active-listing counter ">25</div>
                      <div className="wt-card-bottom ">
                        <h4 className="m-b0">Posted Jobs</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-2 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon"><i className="far fa-file-alt"></i></div>
                      <div className="wt-card-right  wt-total-listing-view counter ">435</div>
                      <div className="wt-card-bottom">
                        <h4 className="m-b0">Total Applications</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-3 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon"><i className="far fa-envelope"></i></div>
                      <div className="wt-card-right wt-total-listing-review counter ">28</div>
                      <div className="wt-card-bottom">
                        <h4 className="m-b0">Messages</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-12 mb-3">
                <div className="panel panel-default">
                  <div className="panel-body wt-panel-body gradi-4 dashboard-card ">
                    <div className="wt-card-wrap">
                      <div className="wt-card-icon"><i className="far fa-bell"></i></div>
                      <div className="wt-card-right wt-total-listing-bookmarked counter ">18</div>
                      <div className="wt-card-bottom">
                        <h4 className="m-b0">Notifications</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="twm-pro-view-chart-wrap">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12 mb-4">
                <div className="panel panel-default site-bg-white">
                  <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0"><i className="far fa-chart-bar"></i>Your Profile Views</h4>
                  </div>
                  <div className="panel-body wt-panel-body twm-pro-view-chart">
                    <canvas id="profileViewChart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12 mb-4">
                <div className="panel panel-default">
                  <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Inbox</h4>
                  </div>
                  <div className="panel-body wt-panel-body bg-white">
                    <div className="dashboard-messages-box-scroll scrollbar-macosx">
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                        <div className="dashboard-message-area">
                          <h5>Lucy Smith<span>18 June 2023</span></h5>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                        </div>
                      </div>
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar"><img src="images/user-avtar/pic3.jpg" alt="" /></div>
                        <div className="dashboard-message-area">
                          <h5>Richred paul<span>19 June 2023</span></h5>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                        </div>
                      </div>
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar"><img src="images/user-avtar/pic4.jpg" alt="" /></div>
                        <div className="dashboard-message-area">
                          <h5>Jon Doe<span>20 June 2023</span></h5>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                        </div>
                      </div>
                      <div className="dashboard-messages-box">
                        <div className="dashboard-message-avtar"><img src="images/user-avtar/pic1.jpg" alt="" /></div>
                        <div className="dashboard-message-area">
                          <h5>Thomas Smith<span>22 June 2023</span></h5>
                          <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 mb-4">
                <div className="panel panel-default site-bg-white m-t30">
                  <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0"><i className="far fa-list-alt"></i>Recent Activities</h4>
                  </div>
                  <div className="panel-body wt-panel-body">
                    <div className="dashboard-list-box list-box-with-icon">
                      <ul>
                        <li>
                          <i className="fa fa-envelope text-success list-box-icon"></i>Nikol Tesla has sent you <a href="#" className="text-success">private message!</a>
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-suitcase text-primary list-box-icon"></i>Your job for
                          <a href="#" className="text-primary">Web Designer</a> has been approved!
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-bookmark text-warning list-box-icon"></i> Someone bookmarked your
                          <a href="#" className="text-warning">SEO Expert</a> Job listing!
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-tasks text-info list-box-icon"></i> Your job listing Core
                          <a href="#" className="text-info">PHP Developer</a> for Site Maintenance is expiring!
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-paperclip text-success list-box-icon"></i> You have new application for
                          <a href="#" className="text-success"> UI/UX Developer & Designer! </a>
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-suitcase text-danger list-box-icon"></i> Your Magento Developer job expire
                          <a href="#" className="text-danger">Renew</a> now it.
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                        <li>
                          <i className="fa fa-star site-text-orange list-box-icon"></i> David cope left a
                          <a href="#" className="site-text-orange"> review 4.5</a> for Real Estate Logo
                          <a href="#" className="close-list-item color-lebel clr-red">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 mb-4">
                <div className="panel panel-default">
                  <div className="panel-heading wt-panel-heading p-a20">
                    <h4 className="panel-tittle m-a0">Recent Applicants</h4>
                  </div>
                  <div className="panel-body wt-panel-body bg-white">
                    <div className="twm-dashboard-candidates-wrap">
                      <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img src="images/candidates/pic1.jpg" alt="#" />
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <a href="#" className="twm-job-title">
                                <h4>Wanda Montgomery </h4>
                              </a>
                              <p>Charted Accountant</p>
                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address"><i className="feather-map-pin"></i>New York</p>
                                  <div className="twm-jobs-vacancies">$20<span>/ Day</span></div>
                                </div>
                                <div className="twm-right-btn">
                                  <ul className="twm-controls-icon list-unstyled">
                                    <li>
                                      <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="fa fa-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-envelope-open"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-trash-alt"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img src="images/candidates/pic2.jpg" alt="#" />
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <a href="#" className="twm-job-title">
                                <h4>Peter Hawkins</h4>
                              </a>
                              <p>Medical Professed</p>
                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address"><i className="feather-map-pin"></i>New York</p>
                                  <div className="twm-jobs-vacancies">$7<span>/ Hour</span></div>
                                </div>
                                <div className="twm-right-btn">
                                  <ul className="twm-controls-icon list-unstyled">
                                    <li>
                                      <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="fa fa-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-envelope-open"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-trash-alt"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img src="images/candidates/pic3.jpg" alt="#" />
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <a href="#" className="twm-job-title">
                                <h4>Ralph Johnson </h4>
                              </a>
                              <p>Bank Manger</p>
                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address"><i className="feather-map-pin"></i>New York</p>
                                  <div className="twm-jobs-vacancies">$180<span>/ Day</span></div>
                                </div>
                                <div className="twm-right-btn">
                                  <ul className="twm-controls-icon list-unstyled">
                                    <li>
                                      <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="fa fa-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-envelope-open"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-trash-alt"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img src="images/candidates/pic4.jpg" alt="#" />
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <a href="#" className="twm-job-title">
                                <h4>Randall Henderson </h4>
                              </a>
                              <p>IT Contractor</p>
                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address"><i className="feather-map-pin"></i>New York</p>
                                  <div className="twm-jobs-vacancies">$90<span>/ Week</span></div>
                                </div>
                                <div className="twm-right-btn">
                                  <ul className="twm-controls-icon list-unstyled">
                                    <li>
                                      <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="fa fa-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-envelope-open"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-trash-alt"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                          <div className="twm-dash-candidates-list">
                            <div className="twm-media">
                              <div className="twm-media-pic">
                                <img src="images/candidates/pic6.jpg" alt="#" />
                              </div>
                            </div>
                            <div className="twm-mid-content">
                              <a href="#" className="twm-job-title">
                                <h4>Christina Fischer </h4>
                              </a>
                              <p>Charity &amp; Voluntary</p>
                              <div className="twm-fot-content">
                                <div className="twm-left-info">
                                  <p className="twm-candidate-address"><i className="feather-map-pin"></i>New York</p>
                                  <div className="twm-jobs-vacancies">$19<span>/ Hour</span></div>
                                </div>
                                <div className="twm-right-btn">
                                  <ul className="twm-controls-icon list-unstyled">
                                    <li>
                                      <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="fa fa-eye"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-envelope-open"></span>
                                      </button>
                                    </li>
                                    <li>
                                      <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                        <span className="far fa-trash-alt"></span>
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <button type="button" className="site-button outline-primary">Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
