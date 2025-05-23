'use client';

import React from 'react';

const Banner: React.FC = () => {
    return (
        <div
            className="twm-home5-banner-section"
            style={{ backgroundImage: 'url(/images/home-5/slider/bg-1.jpg)' }}
        >
            <div className="row">
                {/* Left Section */}
                <div className="col-xl-6 col-lg-6 col-md-12 btm-bdr-banner">
                    <div className="twm-bnr-left-section">
                        <div className="twm-bnr-title-large">
                            It&apos;s Easy to Find Your <span className="site-text-primary">Dream Job</span>
                        </div>
                        <div className="twm-bnr-discription">You dream job is waiting for you.</div>

                        <div className="twm-bnr-search-bar">
                            <form>
                                <div className="row">
                                    <div className="form-group col-xl-4 col-lg-12 col-md-12">
                                        <label htmlFor="j-All_Category">Type</label>
                                        <select className="wt-search-bar-select selectpicker" data-live-search="true" id="j-All_Category">
                                            <option value="" disabled>Select Category</option>
                                            <option value="all">All Category</option>
                                            <option value="web-designer">Web Designer</option>
                                            <option value="developer">Developer</option>
                                            <option value="accountant">Accountant</option>
                                        </select>
                                    </div>

                                    {/* Location */}
                                    <div className="form-group col-xl-5 col-lg-12 col-md-12">
                                        <label>Location</label>
                                        <div className="twm-inputicon-box">
                                            <input
                                                name="location"
                                                type="text"
                                                required
                                                className="form-control"
                                                placeholder="Search..."
                                            />
                                        </div>
                                    </div>

                                    {/* Find Job Button */}
                                    <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-6">
                                        <button type="button" className="site-button">
                                            Find Job
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Candidates */}
                        <div className="twm-bnr-5-blocks">
                            <span className="twm-title">Our More Candidates</span>
                            <div className="twm-bnr-5-blocks-inner">
                                <div className="twm-pics">
                                    {['u-1', 'u-2', 'u-3', 'u-4', 'u-5', 'u-6'].map((user, i) => (
                                        <span key={i}>
                                            <img
                                                src={`/images/main-slider/slider1/user/${user}.jpg`}
                                                alt=""
                                            />
                                        </span>
                                    ))}
                                </div>
                                <div className="twm-content">
                                    <div className="tw-count-number text-clr-green">
                                        <span className="counter">3</span>K+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-main">
                    <div className="twm-bnr-right-section anm">
                        <div
                            className="twm-bnr-right-section-inner anm"
                            data-wow-delay="1000ms"
                            data-speed-x="2"
                            data-speed-y="2"
                        >
                            {[1, 2, 3, 4].map((pic, i) => (
                                <div key={i} className={`twm-graphics-h5 twm-p${pic}`}>
                                    <img
                                        src={`/images/home-5/slider/r-pic${pic}.png`}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="twm-banner-h5-r-b-info">
                        <span>Your Latest Jobs</span>
                        <h3 className="twm-banner-h5-r-b-outline-text">Find Jobs</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
