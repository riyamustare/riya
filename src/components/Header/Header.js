import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isWorkRoute = location.pathname === '/work';
  const isBlogRoute = location.pathname === '/blog';

  return (
    <>
      <h1 className="pt-2 text-white text-xl">
        Hey, I'm Riya Mustare 👋
      </h1>

      <p className='text-t-secondary pt-6 sm:leading-7'>
        A developer passionate about building real-world solutions. Always curious, a fast learner, and take ownership to get things done.
      </p>

      <div className='flex justify-between flex-center'>
        <div className='flex flex-center text-t-secondary-dark space-x-6 pt-4'>
          {isBlogRoute ? (
            <>
              <Link to='/' className='flex flex-center space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'>
                <span>home</span>
                <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
              </Link>
              <Link to='/work' className='flex flex-center space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'>
                <span>work</span>
                <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
              </Link>
            </>
          ) : isWorkRoute ? (
            <Link to='/' className='flex flex-center space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'>
              <span>home</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </Link>
          ) : (
            <Link to='/work' className='flex flex-center space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'>
              <span>work</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </Link>
          )}

          {!isBlogRoute && (
            <Link to='/blog' className='flex flex-center space-x-2 cursor-pointer hover:text-t-accent'>
              <span>blog</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </Link>
          )}
        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1hAz9bdwWu5Iy8eQSfK3Rf_01r_xVHN6i"
          className='flex pt-4 space-x-2 text-t-secondary-dark cursor-pointer hover:text-t-accent'
          download
        >
          <span>Download Resume</span>
          <FontAwesomeIcon width={12} height={12} icon={faDownload} />
        </a>
      </div>
    </>
  );
}

export default Header;
