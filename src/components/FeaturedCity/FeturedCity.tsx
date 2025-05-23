import React from 'react';

const FeaturedCity = () => {
  const cities = [
    { name: 'London, England', jobs: '125 Jobs', image: 'city1.jpg' },
    { name: 'Paris, France', jobs: '260 Jobs', image: 'city2.jpg' },
    { name: 'New York, USA', jobs: '300 Jobs', image: 'city3.jpg' },
    { name: 'Bangkok, Thailand', jobs: '2k Jobs', image: 'city4.jpg' },
    { name: 'Helsinki, Finland', jobs: '1.5k Jobs', image: 'city5.jpg' },
    { name: 'Berlin, Germany', jobs: '700 Jobs', image: 'city6.jpg' },
  ];

  return (
    <div className="section-full p-t120 pos-relative site-bg-white twm-featured-city-area">
      <div className="twm-bg-section-box"></div>
      <div className="container">
        <div className="wt-separator-two-part content-white">
          <div className="row wt-separator-two-part-row">
            <div className="col-xl-5 col-lg-5 col-md-12 wt-separator-two-part-left">
              <div className="section-head left wt-small-separator-outer">
                <div className="wt-small-separator site-text-primary">
                  <div>Jobs by location</div>
                </div>
                <h2 className="wt-title">Find your favourite jobs and get.</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 wt-separator-two-part-right text-right">
              <a href="job-list.html" className="site-button white">View All Locations</a>
            </div>
          </div>
        </div>

        <div className="twm-featured-city2-section">
          <div className="row">
            {cities.map((city, index) => (
              <div key={index} className={`col-xl-${index === 2 || index === 4 ? 5 : index % 2 === 0 ? 4 : 3} col-lg-4 col-md-6`}>
                <div className="twm-featured-city2">
                  <div className="twm-media" style={{ backgroundImage: `url(images/home-5/featured-cities/${city.image})` }}>
                  </div>
                  <div className="twm-city-info">
                    <h4 className="twm-title"><a href="job-list.html">{city.name}</a></h4>
                    <div className="twm-city-jobs">{city.jobs}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCity;
