import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartLine, faUserFriends, faComments } from '@fortawesome/free-solid-svg-icons';
import { faJira, faAws, faDocker, faFigma, faGit } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <div className='w-full h-full mt-8'>
            <h1 className="text-white text-xl">Product Management Skills</h1>
            <div className="ml-4">
                
                {/* Technical Background */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Technical Background</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faCode} />
                            <span className="text-base">Software Development</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Machine Learning</span>
                        </div>
                    </div>
                </div>

                {/* Analytical Thinking */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Analytical Thinking</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faChartLine} />
                            <span className="text-base">Data-Driven Decision Making</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Prioritization & Problem Solving</span>
                        </div>
                    </div>
                </div>

                {/* User-Centric Mindset */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">User-Centric Mindset</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faUserFriends} />
                            <span className="text-base">User Research & Analysis</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Solving Real User Problems</span>
                        </div>
                    </div>
                </div>

                {/* Communication Skills */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Communication</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faComments} />
                            <span className="text-base">Clear & Concise Messaging</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Cross-Functional Collaboration</span>
                        </div>
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Tools & Technologies</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faJira} />
                            <span className="text-base">Jira</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faFigma} />
                            <span className="text-base">Figma</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faGit} />
                            <span className="text-base">Git</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faAws} />
                            <span className="text-base">AWS</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} icon={faDocker} />
                            <span className="text-base">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
