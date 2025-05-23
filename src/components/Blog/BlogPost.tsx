import React from 'react';

interface BlogPostProps {
  imageSrc: string;
  author: { image: string; name: string };
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ imageSrc, author, date, category, title, description, link }) => (
  <div className="col-lg-4 col-md-6">
    <div className="blog-post twm-blog-post-h5-outer">
      <div className="wt-post-media">
        <a href={link}><img src={imageSrc} alt={title} /></a>
      </div>
      <div className="wt-post-info">
        <div className="post-author">
          <div className="post-author-pic">
            <div className="p-a-pic"><img src={author.image} alt={author.name} /></div>
            <div className="p-a-info">
              <a href={link}>{author.name}</a>
              <p>{date}</p>
            </div>
          </div>
          <div className="post-categories">
            <a href={link}>{category}</a>
          </div>
        </div>
        <div className="wt-post-title">
          <h4 className="post-title">
            <a href={link}>{title}</a>
          </h4>
        </div>
        <div className="wt-post-text">
          <p>{description}</p>
        </div>
        <div className="wt-post-readmore">
          <a href={link} className="site-button-link site-text-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogPost;