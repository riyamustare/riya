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
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
            a real-time chat application built using Django Channels, WebSockets, and Redis. The application enables users to send and receive messages instantly, providing a seamless chat experience.          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Django</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">WebSockets</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Redis</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Postgres</div>
          </div>
        </div>



        {/* Satbara Agriculture App Project */}
        <div className='bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/riyamustare/video-to-mp3" target="_blank" rel="noopener noreferrer">
              <span className="pr-2" >video to mp3</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
          This project demonstrates a microservices architecture for building a distributed application that converts video files to MP3 files. The application integrates several technologies, including Python, RabbitMQ, MongoDB, Docker, Kubernetes, and MySQL.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">NODE</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">EXPRESS</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">MONGO DB</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">REST APIs</div>
          </div>
        </div>




        {/* nand 2 tetris Project */}
        <div className='relative bg-secondary-bg p-6 rounded-lg border border-transparent hover:border-stone-500 hover:shadow-lg transition-all ease-in duration-200'>
          <div className='flex flex-center space-x-2 text-white cursor-pointer hover:text-t-accent'>
            <a href="https://github.com/riyamustare/houseprice-prediction" target="_blank" rel="noopener noreferrer">
              <span className="pr-2">Value my House</span>
              <FontAwesomeIcon width={12} height={12} icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p className='text-neutral-500 pt-2 text-sm sm:leading-7'>
          This is a Flask-based web application that predicts house prices based on user inputs. The application uses a pre-trained regression model and a scaling model to provide predictions. The user can input various features of a house, and the application will return the predicted price.
          </p>
          <div className='flex flex-row flex-center flex-wrap gap-2 mt-4'>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Flask</div>
            <div className="rounded py-2 px-1 border-stone-400 border text-xs text-t-secondary-dark">Linear Regression</div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Project;
