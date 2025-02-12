import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Project() {
  return (
    <>
      <h1 className="text-white text-xl">Case Studies</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6'>

        
        {/* Real Time Chat */}
        <a href="https://drive.google.com/file/d/1sUsEaEtaozJ9iT6k5MLX1EKnX4Cwp5qt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="pr-2">
        <div className='relative bg-secondary-bg p-3 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <img src="INDmoney.png" alt="INDmoney Logo" className="h-25 mb-2 mx-auto rounded-lg" />
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
              INDmoney
          </div>
          <p className='text-neutral-500 text-sm sm:leading-7'>
            Turning investors into loyal traders!
          </p>
        </div>
        </a>




        {/* Satbara Agriculture App Project
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/riyamustare/video-to-mp3" target="_blank" rel="noopener noreferrer">
              <span className="pr-2" >video to mp3</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
          Developed a microservices-based distributed application for video-to-MP3 conversion, integrating Python, RabbitMQ, MongoDB, Docker, Kubernetes, and MySQL.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Docker</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Kubernetes</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">MONGO DB</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">MySQL</div>
          </div>
        </div> */}




        {/* nand 2 tetris Project
        <div className='relative bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/riyamustare/houseprice-prediction" target="_blank" rel="noopener noreferrer">
              <span className="pr-2">Value my House</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
          Developed a Flask-based web app for house price prediction using a pre-trained regression model and feature scaling for accurate estimations.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Flask</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Linear Regression</div>
          </div>
        </div> */}
      </div>

      <h1 className="text-white text-xl">Projects</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-6'>

        

        {/* HTTP Server Project */}
        <div className='relative bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/riyamustare/connect-realtimechat" target="_blank" rel="noopener noreferrer">
              <span className="pr-2">Realtime Chat Application</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-1 text-sm sm:leading-5'>
          Built a real-time chat platform with asynchronous messaging, enhancing engagement with instant
          messaging and live UI updates.
          </p>
        </div>



        {/* Satbara Agriculture App Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/riyamustare/video-to-mp3" target="_blank" rel="noopener noreferrer">
              <span className="pr-2" >Scalable Video Conversion with Microservices</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-1 text-sm sm:leading-5'>
          Developed a distributed video-to-MP3 conversion system, improving eﬃciency with asynchronous job
processing.
          </p>
        </div>


      </div>
    </>
  );
}

export default Project;
