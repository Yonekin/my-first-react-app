import React, { useState, useEffect } from 'react';
import Blogcard from './blog-card.jsx'; // Assuming Blogcard component is in the same directory

function BlogCards() { // Use an uppercase initial letter for the component name

    const fetchBlogs = async () => {
        let blogs = [];
        let count = 1;
        while (true) {
            const response = await fetch(`../blogs/blog${count}.json`);


            let blog = await response.json();
            blogs.push(blog);
            if (!response.ok || count === 3) { // Adjust the condition as needed
                break;
            }
            count++;
        }
        return blogs;
    };

    useEffect(() => {
        const fetchData = async () => {
            const fetchedBlogs = await fetchBlogs();
            setBlogs(fetchedBlogs);
        };
        fetchData();
    }, []);

    const [blogs, setBlogs] = useState([]);

    return (
        <div>
            {blogs.map(blog => (
                Blogcard(blog)
            ))}
        </div>
    );
};

export default BlogCards;
