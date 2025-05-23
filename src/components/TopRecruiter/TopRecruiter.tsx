
import React from 'react';
import RecruiterCard from './RecruiterCard';

const recruiters = [
    { id: 1, name: 'LinkedIn', image: 'images/home-5/recruiters/1.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 2, name: 'Apple Inc.', image: 'images/home-5/recruiters/2.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 3, name: 'Saudi Aramco', image: 'images/home-5/recruiters/3.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 4, name: 'Alphabet Inc.', image: 'images/home-5/recruiters/4.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 5, name: 'Amazon.com Inc.', image: 'images/home-5/recruiters/5.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 6, name: 'Tesla Inc.', image: 'images/home-5/recruiters/6.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 7, name: 'NVIDIA Corp.', image: 'images/home-5/recruiters/7.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 8, name: 'Hathaway Inc.', image: 'images/home-5/recruiters/8.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 9, name: 'NVIDIA Corp', image: 'images/home-5/recruiters/9.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 10, name: 'Meta Platforms', image: 'images/home-5/recruiters/10.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 11, name: 'Youtube', image: 'images/home-5/recruiters/11.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 12, name: 'Instagram', image: 'images/home-5/recruiters/12.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 13, name: 'McKesson', image: 'images/home-5/recruiters/13.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 14, name: 'Foxconn', image: 'images/home-5/recruiters/14.jpg', jobs: 25, rating: 68, location: 'New York, US' },
    { id: 15, name: 'Microsoft', image: 'images/home-5/recruiters/15.jpg', jobs: 25, rating: 68, location: 'New York, US' },
];

const TopRecruiter = () => (
    <div className="section-full p-t120 p-b90 site-bg-white">
        <div className="container">
            <div className="section-head center wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                    <div>Top Recruiters</div>
                </div>
                <h2 className="wt-title">Discover your next career move</h2>
            </div>
            <div className="section-content">
                <div className="twm-recruiters5-wrap">
                    <div className="twm-column-5 m-b30">
                        <ul>
                            {recruiters.map(recruiter => (
                                <RecruiterCard key={recruiter.id} recruiter={recruiter} />
                            ))}
                        </ul>
                    </div>
                    <div className="text-center m-b30">
                        <a href="job-list.html" className="site-button">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TopRecruiter;