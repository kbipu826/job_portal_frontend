// Jobs Category START
import React from 'react';
import { FaHandshake, FaHeadset, FaChartBar, FaUserTie, FaTasks, FaUser, FaTools, FaRegStickyNote, FaCode, FaBriefcase, FaUserCog } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const JobsCategory: React.FC = () => {
    return (
        <div className="section-full p-t120 p-b90 site-bg-white job-categories-home-5-wrap twm-bdr-bottom-1">
            <div className="container">

                {/* TITLE START */}
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>Browse By Category</div>
                    </div>
                    <h2 className="wt-title">Find the job that&apos;s perfect for you.</h2>
                </div>
                {/* TITLE END */}

            </div>

            <div className="section-content twm-jobs-grid-h5-section-outer">
                <div className="twm-jobs-grid-h5-section overlay-wraper" style={{ backgroundImage: 'url(images/home-5/cate-bg.jpg)' }}>
                    <div className="overlay-main site-bg-primary opacity-09"></div>

                    <div className="swiper-container category-5-slider">
                        <div className="swiper-wrapper">

                            {/* 1 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-1">
                                        <FaHandshake className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Marketing & Sale</a>
                                        <div className="twm-jobs-available">1526 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-3">
                                        <FaHeadset className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Customer Help</a>
                                        <div className="twm-jobs-available">1526 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-2">
                                        <FaChartBar className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Finance</a>
                                        <div className="twm-jobs-available">168 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-4">
                                        <MdDashboard className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Software</a>
                                        <div className="twm-jobs-available">300 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 5 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-1">
                                        <FaUserTie className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Human Resource</a>
                                        <div className="twm-jobs-available">125 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 6 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-3">
                                        <FaTasks className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Management</a>
                                        <div className="twm-jobs-available">450 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 7 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-2">
                                        <FaUser className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Retail & Products</a>
                                        <div className="twm-jobs-available">95 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 8 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-4">
                                        <FaTools className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Security Analyst</a>
                                        <div className="twm-jobs-available">35 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 9 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-3">
                                        <FaRegStickyNote className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Content Writer</a>
                                        <div className="twm-jobs-available">200 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 10 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-2">
                                        <FaCode className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Market Research</a>
                                        <div className="twm-jobs-available">140 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 11 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-4">
                                        <FaBriefcase className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Marketing & Sale</a>
                                        <div className="twm-jobs-available">80 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 12 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-1">
                                        <FaUserCog className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Customer Help</a>
                                        <div className="twm-jobs-available">160 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 13 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-3">
                                        <FaHandshake className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Marketing & Sale</a>
                                        <div className="twm-jobs-available">1526 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 14 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-2">
                                        <FaHeadset className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Customer Help</a>
                                        <div className="twm-jobs-available">1526 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 15 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-4">
                                        <FaChartBar className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Finance</a>
                                        <div className="twm-jobs-available">168 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 16 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-1">
                                        <MdDashboard className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Software</a>
                                        <div className="twm-jobs-available">300 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 17 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-3">
                                        <FaUserTie className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Human Resource</a>
                                        <div className="twm-jobs-available">125 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 18 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-2">
                                        <FaTasks className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Management</a>
                                        <div className="twm-jobs-available">450 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 19 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-4">
                                        <FaUser className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Retail & Products</a>
                                        <div className="twm-jobs-available">95 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 20 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-1">
                                        <FaTools className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Security Analyst</a>
                                        <div className="twm-jobs-available">35 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 21 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-3">
                                        <FaRegStickyNote className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Content Writer</a>
                                        <div className="twm-jobs-available">200 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 22 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-2">
                                        <FaCode className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Market Research</a>
                                        <div className="twm-jobs-available">140 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 23 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-4">
                                        <FaBriefcase className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Marketing & Sale</a>
                                        <div className="twm-jobs-available">80 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                            {/* 24 */}
                            <div className="swiper-slide">
                                <div className="job-categories-home-5">
                                    <div className="twm-media cat-bg-clr-1">
                                        <FaUserCog className="icon-xld" color='white' size={30} />
                                    </div>
                                    <div className="twm-content">
                                        <a href="job-detail.html">Customer Help</a>
                                        <div className="twm-jobs-available">160 Jobs Available</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Add Pagination */}
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobsCategory;