import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const JobSection: React.FC = () => {
    const jobs = [
        {
            amount: '$500 / hour',
            image: 'images/home-5/jobs-company/pic1.jpg',
            address: 'New York, US',
            companyName: 'Crystel Inc Pvt. Ltd.',
            jobTitle: 'UI / UX Designer fulltime',
            duration: 'Fulltime',
            postedTime: '4 Minutes ago',
            description: 'Lorem Ipsum is simply dummy text of printing and typesetting industry',
            views: '86+',
            categories: ['AdobeXd', 'Figma', 'Photoshop', 'Corel']
        },
        {
            amount: '$250 / hour',
            image: 'images/home-5/jobs-company/pic2.jpg',
            address: 'New York, US',
            companyName: 'Infosys BPM Ltd.',
            jobTitle: 'Full Stack Engineer',
            duration: 'Fulltime',
            postedTime: '4 Minutes ago',
            description: 'Lorem Ipsum is simply dummy text of printing and typesetting industry',
            views: '50+',
            categories: ['AdobeXd', 'Figma', 'Photoshop', 'Corel']
        },
        {
            amount: '$250 / hour',
            image: 'images/home-5/jobs-company/pic3.jpg',
            address: 'New York, US',
            companyName: 'Accenture Plc',
            jobTitle: 'Frontend Developer',
            duration: 'Fulltime',
            postedTime: '4 Minutes ago',
            description: 'Lorem Ipsum is simply dummy text of printing and typesetting industry',
            views: '200+',
            categories: ['AdobeXd', 'Figma', 'Photoshop', 'Corel']
        },
        {
            amount: '$150 / hour',
            image: 'images/home-5/jobs-company/pic4.jpg',
            address: 'New York, US',
            companyName: 'Infosys BPM Ltd.',
            jobTitle: 'Products Manager',
            duration: 'Fulltime',
            postedTime: '4 Minutes ago',
            description: 'Lorem Ipsum is simply dummy text of printing and typesetting industry',
            views: '35+',
            categories: ['AdobeXd', 'Figma', 'Photoshop', 'Corel']
        },
        {
            amount: '$299 / hour',
            image: 'images/home-5/jobs-company/pic5.jpg',
            address: 'New York, US',
            companyName: 'Crystel Inc Pvt. Ltd.',
            jobTitle: 'React Native Web Developer',
            duration: 'Fulltime',
            postedTime: '4 Minutes ago',
            description: 'Lorem Ipsum is simply dummy text of printing and typesetting industry',
            views: '500+',
            categories: ['AdobeXd', 'Figma', 'Photoshop', 'Corel']
        },
        {
            amount: '$500 / hour',
            image: 'images/home-5/jobs-company/pic6.jpg',
            address: 'New York, US',
            companyName: 'Accenture Plc',
            jobTitle: 'Lead Quality Control QA',
            duration: 'Fulltime',
            postedTime: '4 Minutes ago',
            description: 'Lorem Ipsum is simply dummy text of printing and typesetting industry',
            views: '1K+',
            categories: ['AdobeXd', 'Figma', 'Photoshop', 'Corel']
        }
    ];

    return (
        <div className="section-full p-t120 p-b90 site-bg-white pos-relative twm-bdr-bottom-1">
            <div className="container">
                <div className="section-head center wt-small-separator-outer">
                    <div className="wt-small-separator site-text-primary">
                        <div>Job of the day</div>
                    </div>
                    <h2 className="wt-title">Connect with the right candidates faster.</h2>
                </div>

                <div className="section-content">
                    <div className="twm-jobs-grid-h5-wrap">
                        <div className="row">
                            {jobs.map((job, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="twm-jobs-st5 m-b30">
                                        <div className="twm-jobs-amount">{job.amount}</div>
                                        <div className="twm-job-st5-top">
                                            <div className="twm-media">
                                                <img src={job.image} alt="#" />
                                            </div>
                                            <div className="twm-com-info">
                                                <p className="twm-job-address">{job.address}</p>
                                                <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-com-name site-text-primary">
                                                    {job.companyName}
                                                </a>
                                            </div>
                                        </div>

                                        <div className="twm-mid-content">
                                            <a href="job-detail.html" className="twm-job-title">
                                                <h4>{job.jobTitle}</h4>
                                            </a>
                                            <div className="twm-job-duration">
                                                <ul>
                                                    <li>
                                                        <span className="twm-job-post-duration"><FaCalendarAlt /> {job.duration}</span>
                                                    </li>
                                                    <li>
                                                        <span className="twm-job-post-duration"><FaClock /> {job.postedTime}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <p>{job.description}</p>
                                        </div>
                                        <div className="twm-right-content">
                                            <div className="twm-candi-thum-content">
                                                <div className="twm-pics">
                                                    <span><img src="images/main-slider/slider2/user/u-1.jpg" alt="" /></span>
                                                    <span><img src="images/main-slider/slider2/user/u-2.jpg" alt="" /></span>
                                                    <span><img src="images/main-slider/slider2/user/u-3.jpg" alt="" /></span>
                                                    <span><img src="images/main-slider/slider2/user/u-4.jpg" alt="" /></span>
                                                    <span><img src="images/main-slider/slider2/user/u-5.jpg" alt="" /></span>
                                                    <span><img src="images/main-slider/slider2/user/u-6.jpg" alt="" /></span>
                                                    <div className="tot-view"><b>{job.views}<i>+</i></b></div>
                                                </div>
                                            </div>
                                            <a href="job-detail.html" className="twm-jobs-browse site-text-primary">Apply Job</a>
                                        </div>
                                        <div className="twm-jobs-category outline">
                                            {job.categories.map((category, catIndex) => (
                                                <a href="javascript:;" key={catIndex}>{category}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="twm-bg-shape5-left"></div>
        </div>
    );
};

export default JobSection;
