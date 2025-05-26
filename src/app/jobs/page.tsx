'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FiSearch,
    FiMapPin,
    FiBriefcase,
    FiClock,
    FiDollarSign
} from 'react-icons/fi';

const JobsPage = () => {
    return (
        <div className="page-content">
            {/* INNER PAGE BANNER */}
            <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: 'url(/images/banner/1.jpg)' }}>
                <div className="overlay-main site-bg-white opacity-01"></div>
                <div className="container">
                    <div className="wt-bnr-inr-entry">
                        <div className="banner-title-outer">
                            <div className="banner-title-name">
                                <h2 className="wt-title">The Most Exciting Jobs</h2>
                            </div>
                        </div>
                        <div>
                            <ul className="wt-breadcrumb breadcrumb-style-2">
                                <li><a href="">Home</a></li>
                                <li>Jobs Grid</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* JOBS LISTING SECTION */}
            <div className="section-full p-t120 p-b90 site-bg-white">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-lg-4 col-md-12 rightSidebar">
                            <div className="side-bar">
                                <div className="sidebar-elements search-bx">
                                    <form>
                                        <div className="form-group mb-4">
                                            <h4 className="section-head-small mb-4">Category</h4>
                                            <select className="wt-select-bar-large">
                                                <option>All Category</option>
                                                <option>Web Designer</option>
                                                <option>Developer</option>
                                                <option>Acountant</option>
                                            </select>
                                        </div>

                                        <div className="form-group mb-4">
                                            <h4 className="section-head-small mb-4">Keyword</h4>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Job Title or Keyword" />
                                                <button className="btn" type="button"><FiSearch /></button>
                                            </div>
                                        </div>

                                        <div className="form-group mb-4">
                                            <h4 className="section-head-small mb-4">Location</h4>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search location" />
                                                <button className="btn" type="button"><FiMapPin /></button>
                                            </div>
                                        </div>

                                        <div className="twm-sidebar-ele-filter">
                                            <h4 className="section-head-small mb-4">Job Type</h4>
                                            <ul>
                                                {['Freelance', 'Full Time', 'Internship', 'Part Time', 'Temporary', 'Volunteer'].map((type, index) => (
                                                    <li key={index}>
                                                        <div className="form-check">
                                                            <input type="checkbox" className="form-check-input" id={`type${index}`} />
                                                            <label className="form-check-label" htmlFor={`type${index}`}>{type}</label>
                                                        </div>
                                                        <span className="twm-job-type-count">{Math.floor(Math.random() * 30)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div className="col-lg-8 col-md-12">
                            {/* Filter Short By */}
                            <div className="product-filter-wrap d-flex justify-content-between align-items-center m-b30">
                                <span className="woocommerce-result-count-left">Showing 2,150 jobs</span>
                                <form className="woocommerce-ordering twm-filter-select">
                                    <span className="woocommerce-result-count">Short By</span>
                                    <select className="wt-select-bar-2">
                                        <option>Most Recent</option>
                                        <option>Freelance</option>
                                        <option>Full Time</option>
                                        <option>Internship</option>
                                        <option>Part Time</option>
                                        <option>Temporary</option>
                                    </select>
                                </form>
                            </div>

                            {/* Job Cards */}
                            <div className="row">
                                {[1, 2, 3, 4, 5, 6].map((job) => (
                                    <div key={job} className="col-lg-6 col-md-12 m-b30">
                                        <div className="twm-jobs-grid-style1">
                                            <div className="twm-media">
                                                <Image
                                                    src={`/images/jobs-company/pic${job}.jpg`}
                                                    alt={`Job ${job}`}
                                                    width={80}
                                                    height={80}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        borderRadius: '10px'
                                                    }}
                                                />
                                            </div>
                                            <span className="twm-job-post-duration">{job} days ago</span>
                                            <div className="twm-jobs-category green">
                                                <span className={`twm-bg-${job % 2 === 0 ? 'new' : 'fulltime'}`}>
                                                    {job % 2 === 0 ? 'New' : 'Full Time'}
                                                </span>
                                            </div>
                                            <div className="twm-mid-content">
                                                <Link href={`/jobs/${job}`} className="twm-job-title">
                                                    <h4>Senior Web Designer, Developer</h4>
                                                </Link>
                                                <p className="twm-job-address">1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                            </div>
                                            <div className="twm-right-content">
                                                <div className="twm-jobs-amount">$2500 <span>/ Month</span></div>
                                                <Link href={`/jobs/${job}`} className="twm-jobs-browse site-text-primary">
                                                    Browse Job
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="pagination-outer">
                                <div className="pagination-style1">
                                    <ul className="clearfix">
                                        <li className="prev"><a href="#"><span><i className="fa fa-angle-left"></i></span></a></li>
                                        <li><a href="#">1</a></li>
                                        <li className="active"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#"><i className="fa fa-ellipsis-h"></i></a></li>
                                        <li><a href="#">5</a></li>
                                        <li className="next"><a href="#"><span><i className="fa fa-angle-right"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsPage;