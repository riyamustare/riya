import React from 'react'

function Work() {
    return (


        <>

            


            <div className='w-full h-full  border-l-neutral-800 border-l flex flex-row ms-4 gap-3 pb-8'>

                {/* dot  style={{transform:" translateX(50%)"}}  */}
                <div className="-translate-x-2/4  w-3 h-3 rounded-full mt-2 gap-2  border border-neutral-800 border-background bg-neutral-800"></div>

                {/* different component will be visible to you here  */}
                <div className="w-full flex flex-col"  >

                    {/* role */}
                    <h1 className=" mb-2 text-white text-base">
                        Technical Writer
                    </h1>


                    <div className="flex flex-col md:justify-between md:flex-row pb-2  ">

                        {/* company name */}
                        <h1 className=" text-white text-lg">
                            Sivi Ai YC w22
                        </h1>

                        <span className='my-1 mx-2 text-sm text-t-accent'  >
                            April 2022 — March 2024
                        </span>
                    </div>


                    {/* all the work will be placed here  */}

                    <ol class='list-decimal text-neutral-500'>
                        <li class='text-neutral-500 text-sm sm:leading-7'>
                        Created SEO-optimized content focused on user interests and content performance insights, growing social media following from 
                            <span class="ml-1 text-neutral-200">1K to 10K.</span>
                        </li>
                        <li class='text-neutral-500 text-sm sm:leading-7'>
                        Participated in daily team meetings, where I learned how the team understood customer feedback, solved issues, and worked on 
                        <span class="ml-1 text-neutral-200">product development.</span>
                        </li>
                    </ol>
                </div>
            </div>

        </>



    )
}

export default Work