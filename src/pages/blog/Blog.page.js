import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    {
      id: 'blog1',
      title: 'Building Products That Users Love!',
      description: 'Insights from Sam Altman’s Startup Playbook.',
    },
    {
      id: 'blog2',
      title: 'Deepseek R1 for Everyone!',
      description: 'A guide into how deepseek r1 works behind the scene.',
    },
    // {
    //   id: 'blog3',
    //   title: 'Getting Started with Microservices Architecture',
    //   description: 'An introduction to microservices, how they work, and when to use them in your applications.',
    // },
  ];

  return (
    <>
      <h1 className="text-white text-xl">Blogs</h1>

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
