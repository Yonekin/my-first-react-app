import React, { useState, useEffect } from 'react';
import './blogcss.css';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  console.log(id);
  const [blogData, setBlogData] = useState({
    titel: '', // You might want to use proper naming like "title" instead of "titel"
    date: '',
    content: '',
  });

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:3003/api/blogs/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog data');
      }
      const data = await response.json();
      setBlogData(data);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <section className='blog'>
      <h1 className='blog-header'>{blogData.titel + id}</h1>
      <div className='blog-date'>{blogData.date}</div>
      <div
        className='blog-content'
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      ></div>
    </section>
  );
}

export default Blog;
