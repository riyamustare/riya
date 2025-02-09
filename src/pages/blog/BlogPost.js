import React from 'react';
import { useParams } from 'react-router-dom';

const blogContent = {
  blog1: {
    title: 'Understanding WebSockets in Real-Time Applications',
    content: `WebSockets provide a full-duplex communication channel over a single TCP connection. 
              They allow real-time data transfer, making them ideal for chat applications, stock market updates, and more.`,
  },
  // blog2: {
  //   title: 'Building a Scalable Backend with Django and PostgreSQL',
  //   content: `Django and PostgreSQL form a powerful backend combination. PostgreSQL offers scalability, while Django provides a robust framework for development.`,
  // },
  // blog3: {
  //   title: 'Getting Started with Microservices Architecture',
  //   content: `Microservices architecture allows applications to be divided into independent services that communicate through APIs. This improves scalability and maintainability.`,
  // },
};

function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return <h1 className="text-white text-xl">Blog Post Not Found</h1>;
  }

  return (
    <>
      <h1 className="text-white text-xl">{post.title}</h1>
      <p className="text-neutral-500 pt-4 text-sm sm:leading-7">{post.content}</p>
    </>
  );
}

export default BlogPost;
