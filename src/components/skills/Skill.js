import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDatabase } from '@fortawesome/free-solid-svg-icons'
import { 
    faPython, 
    faDocker, 
    faAws,
    faJava,
} from '@fortawesome/free-brands-svg-icons'

function Skill() {
    return (
        <div className='w-full h-full mt-8'>
            <h1 className="text-white text-xl">My Skills</h1>

            {/* this is for subsection */}
            <div className="ml-4">

                {/* languague subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Languages</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faPython} />
                            <span className="text-base">Python</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">SQL</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faJava} />
                            <span className="text-base">Java</span>
                        </div>
                    </div>
                </div>


                {/* Backend subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Backend and Database</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Django</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Flask</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">Redis</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">PostgreSQL</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">MongoDB</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDatabase} />
                            <span className="text-base">MySQL</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">FastAPI</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">REST API</span>
                        </div>
                    </div>
                </div>

                {/* Devops subsections and other subsection following that */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Devops</h1>
                    <div className='flex flex-row flex-center flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faAws} />
                            <span className="text-base">Aws</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDocker} />
                            <span className="text-base">Docker</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Kubernetes</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Git</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm space-x-1 text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">CI/CD (Github Actions)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill




