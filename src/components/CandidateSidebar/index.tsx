'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CandidateSidebar = () => {
  return (
    <div className="side-bar-st-1">
      <div className="twm-candidate-profile-pic">
        <Image 
          src="/images/user-avtar/pic4.jpg" 
          alt="Profile" 
          width={150} 
          height={150}
          className="rounded-circle"
        />
        <div className="upload-btn-wrapper">
          <div id="upload-image-grid"></div>
          <button className="site-button button-sm">Upload Photo</button>
          <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
        </div>
      </div>
      <div className="twm-mid-content text-center">
        <Link href="/candidate-detail" className="twm-job-title">
          <h4>Randall Henderson</h4>
        </Link>
        <p>IT Contractor</p>
      </div>
      <div className="twm-nav-list-1">
        <ul>
          <li><Link href="/candidate-dashboard"><i className="fa fa-tachometer-alt"></i> Dashboard</Link></li>
          <li className="active"><Link href="/candidate-profile"><i className="fa fa-user"></i> My Profile</Link></li>
          <li><Link href="/candidate-jobs-applied"><i className="fa fa-suitcase"></i> Applied Jobs</Link></li>
          <li><Link href="/candidate-my-resume"><i className="fa fa-receipt"></i> My Resume</Link></li>
          <li><Link href="/candidate-saved-jobs"><i className="fa fa-file-download"></i> Saved Jobs</Link></li>
          <li><Link href="/candidate-cv-manager"><i className="fa fa-paperclip"></i> CV Manager</Link></li>
          <li><Link href="/candidate-job-alert"><i className="fa fa-bell"></i> Job Alerts</Link></li>
          <li><Link href="/candidate-change-password"><i className="fa fa-fingerprint"></i> Change Password</Link></li>
          <li><Link href="/candidate-chat"><i className="fa fa-comments"></i> Chat</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default CandidateSidebar; 