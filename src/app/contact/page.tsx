'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiSearch } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="page-wraper">
      {/* CONTENT START */}
      <div className="page-content">
        {/* INNER PAGE BANNER */}
        <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: "url('/images/banner/1.jpg')" }}>
          <div className="overlay-main site-bg-white opacity-01"></div>
          <div className="container">
            <div className="wt-bnr-inr-entry">
              <div className="banner-title-outer">
                <div className="banner-title-name">
                  <h2 className="wt-title">Contact Us</h2>
                </div>
              </div>
              {/* BREADCRUMB ROW */}
              <div>
                <ul className="wt-breadcrumb breadcrumb-style-2">
                  <li><Link href="/">Home</Link></li>
                  <li>Contact Us</li>
                </ul>
              </div>
              {/* BREADCRUMB ROW END */}
            </div>
          </div>
        </div>
        {/* INNER PAGE BANNER END */}

        {/* CONTACT FORM */}
        <div className="section-full twm-contact-one">
          <div className="section-content">
            <div className="container">
              {/* CONTACT FORM*/}
              <div className="contact-one-inner">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="contact-form-outer">
                      {/* TITLE START*/}
                      <div className="section-head left wt-small-separator-outer">
                        <h2 className="wt-title">Send Us a Message</h2>
                        <p>Feel free to contact us and we will get back to you as soon as we can.</p>
                      </div>
                      {/* TITLE END*/}

                      <form className="cons-contact-form" method="post" action="form-handler2.php">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <input name="username" type="text" required className="form-control" placeholder="Name" />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <input name="email" type="text" className="form-control" required placeholder="Email" />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group mb-3">
                              <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                            </div>
                          </div>

                          <div className="col-lg-12">
                            <div className="form-group mb-3">
                              <textarea name="message" className="form-control" rows={3} placeholder="Message"></textarea>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <button type="submit" className="site-button">Submit Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="contact-info-wrap">
                      <div className="contact-info">
                        <div className="contact-info-section">
                          <div className="c-info-column">
                            <div className="c-info-icon">
                              <FiMapPin size={24} />
                            </div>
                            <h3 className="twm-title">In the bay area?</h3>
                            <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                          </div>

                          <div className="c-info-column">
                            <div className="c-info-icon custome-size">
                              <FiPhone size={24} />
                            </div>
                            <h3 className="twm-title">Feel free to contact us</h3>
                            <p><a href="tel:+216-761-8331">+2 900 234 4241</a></p>
                            <p><a href="tel:+216-761-8331">+2 900 234 3219</a></p>
                          </div>

                          <div className="c-info-column">
                            <div className="c-info-icon">
                              <FiMail size={24} />
                            </div>
                            <h3 className="twm-title">Support</h3>
                            <p>infohelp@gmail.com</p>
                            <p>support12@gmail.com</p>
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

        <div className="gmap-outline">
          <div className="google-map">
            <div style={{ width: '100%' }}>
              <iframe 
                height="460" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT END */}
    </div>
  );
}