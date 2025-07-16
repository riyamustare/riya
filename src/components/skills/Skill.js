import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserFriends, faComments } from '@fortawesome/free-solid-svg-icons';
// import { faJira, faAws, faDocker, faFigma, faGit } from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <div className='w-full h-full mt-8'>
            <h1 className="text-white text-xl">Skills</h1>
            <div className="ml-4">
                
                {/* Technical Background */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Product & Analytical</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">A/B Testing</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Funnel Analysis</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Usage Metrics</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Churn Analysis</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Roadmapping</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">PRD Writing</span>
                        </div>
                    </div>
                </div>

                {/* Analytical Thinking */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">UX & Design</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Figma</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Wireframing</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Prototyping</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">User Journey Mapping</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Usability Testing</span>
                        </div>
                    </div>
                </div>

                {/* User-Centric Mindset */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Automation & GenAI</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Prompt Engineering</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Model Selection</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">API-based Automation</span>
                        </div>
                    </div>
                </div>

                {/* Communication Skills */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Engineering & Tools</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Python</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Fast APIs</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">SQL</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Docker</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">GitHub</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">AWS/GCP</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Kubernetes</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Git</span>
                        </div>
                    </div>
                </div>

                {/* Tools & Technologies */}
                <div className="flex flex-col">
                    <h1 className="text-white text-l mt-4">Tools</h1>
                    <div className='flex flex-row flex-wrap gap-2 mt-2'>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Jira</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Notion</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Dialogflow</span>
                        </div>
                        <div className="rounded py-1 px-2 border-stone-400 border text-sm text-t-secondary-dark">
                            <FontAwesomeIcon width={20} height={20} />
                            <span className="text-base">Clay</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
