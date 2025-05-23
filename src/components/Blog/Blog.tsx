import React from 'react';
import BlogPost from './BlogPost';


const Blog = () => (
  <div className="section-full p-t120 p-b90 site-bg-white">
    <div className="container">
      <div className="section-head center wt-small-separator-outer">
        <div className="wt-small-separator site-text-primary">
          <div>News and Blogs</div>
        </div>
        <h2 className="wt-title">Get the latest news, updates and tips</h2>
      </div>
      <div className="section-content">
        <div className="twm-blog-post-h5-wrap">
          <div className="row">
            <BlogPost
              imageSrc="images/home-5/blog/pic1.jpg"
              author={{ image: "images/home-5/blog-avtar/pic1.jpg", name: "Ralph Johnson" }}
              date="12 January"
              category="Events"
              title="How to convince recruiters and get your dream job"
              description="New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
              link="blog-single.html"
            />
            <BlogPost
              imageSrc="images/home-5/blog/pic2.jpg"
              author={{ image: "images/home-5/blog-avtar/pic2.jpg", name: "Christina Fischer" }}
              date="12 January"
              category="Events"
              title="How to convince recruiters and get your dream job"
              description="New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
              link="blog-single.html"
            />
            <BlogPost
              imageSrc="images/home-5/blog/pic3.jpg"
              author={{ image: "images/home-5/blog-avtar/pic3.jpg", name: "Peter Hawkins" }}
              date="12 January"
              category="Events"
              title="How to convince recruiters and get your dream job"
              description="New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
              link="blog-single.html"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Blog;