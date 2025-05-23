import React from 'react';

const NewsLetter = () => {
  return (
    <div className="section-full p-t60 site-bg-white twm-new-sub-section-wrap site-bg-cover" style={{ backgroundImage: 'url(images/dotted-map.png)' }}>
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="twm-nl-map-media-wrap">
                <div className="twm-nl-map-pointer">
                  <div className="twm-nl-map-pic nw-pic1 bounce">
                    <img src="images/nl-pic/pic1.jpg" alt="#" />
                  </div>
                  <div className="twm-nl-map-pic nw-pic2 bounce2">
                    <img src="images/nl-pic/pic2.jpg" alt="#" />
                  </div>
                  <div className="twm-nl-map-pic nw-pic3 bounce">
                    <img src="images/nl-pic/pic3.jpg" alt="#" />
                  </div>
                  <div className="twm-nl-map-pic nw-pic4 bounce2">
                    <img src="images/nl-pic/pic4.jpg" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="twm-sub-2-section site-bg-cover" style={{ backgroundImage: 'url(images/nwl-bg.png)' }}>
                <h3 className="twm-sub-title">Subscribe to Our Newsletter</h3>
                <div className="twm-sub-discription">Get the latest updates mailed to you</div>
                <form>
                  <div className="form-group">
                    <input name="news-letter" className="form-control" placeholder="Enter Your Email Address" type="text" />
                  </div>
                  <button className="site-button twm-sub-btn white">Subscribe Now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="twm-nl-map-media-wrap">
                <div className="twm-nl-map-pointer">
                  <div className="twm-nl-map-pic nw-pic5 bounce">
                    <img src="images/nl-pic/pic5.jpg" alt="#" />
                  </div>
                  <div className="twm-nl-map-pic nw-pic6 bounce2">
                    <img src="images/nl-pic/pic6.jpg" alt="#" />
                  </div>
                  <div className="twm-nl-map-pic nw-pic7 bounce">
                    <img src="images/nl-pic/pic7.jpg" alt="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
