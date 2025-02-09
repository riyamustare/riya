import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    // {
    //   id: 'blog1',
    //   title: 'Understanding WebSockets in Real-Time Applications',
    //   description: 'Learn how WebSockets enable real-time communication and how you can implement them in your projects.',
    // },
    // {
    //   id: 'blog2',
    //   title: 'Building a Scalable Backend with Django and PostgreSQL',
    //   description: 'A guide to structuring and optimizing a Django backend with PostgreSQL for high-performance applications.',
    // },
    // {
    //   id: 'blog3',
    //   title: 'Getting Started with Microservices Architecture',
    //   description: 'An introduction to microservices, how they work, and when to use them in your applications.',
    // },
  ];

  return (
    <>
      <h1 className="text-white text-xl">Blogs (soon)</h1>

      <div className='grid grid-cols-1 gap-4 mt-6 mb-6'>
        {blogPosts.map((post) => (
          <div key={post.id} className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
            <Link to={`/blog/${post.id}`} className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
              <span>{post.title}</span>
            </Link>
            <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
