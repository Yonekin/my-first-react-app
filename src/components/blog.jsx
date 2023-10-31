import React, { useState, useEffect } from 'react';
import './blogcss.css';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  console.log(id);

  const [blogData, setBlogData] = useState({
    titel: '', 
    date: '',
    content: '',
  });

  const fetchBlog = async () => {
    try {
      const response = await fetch(`../blogs/blog${id}.json`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlog();
      if (data) {
        setBlogData(data);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section className='blog'>
      <h1 className='blog-header'>{blogData.titel}</h1>
      <div className='blog-date'>{blogData.date}</div>
      <div
        className='blog-content'
        dangerouslySetInnerHTML={{ __html: blogData.content }}
      ></div>
    </section>
  );
}

export default Blog;
