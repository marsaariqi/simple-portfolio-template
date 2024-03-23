import Image from 'next/image'
import React from 'react'
import StatHero from './StatHero'

const AboutHero = () => {
    const image = "/placeholder.png"
    return (
        <>
            <div className='w-full h-1/2 flex flex-col justify-center items-center bg-gradient-to-bl from-slate-50 to-slate-300 pt-32 pb-16'>
                <div className='max-w-3xl text-center text-pretty flex flex-col gap-10 px-10 mb-20'>
                    <h1 className='text-5xl font-semibold'>Our Mission</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam suscipit molestiae dolorem neque, beatae libero enim amet illum autem numquam.
                    </h2>
                </div>
                <div className='flex flex-col gap-2 -mt-10'>
                    <progress className="progress w-56" value={0} max="100"></progress>
                    <progress className="progress w-56" value="10" max="100"></progress>
                    <progress className="progress w-56" value="40" max="100"></progress>
                    <progress className="progress w-56" value="70" max="100"></progress>
                    <progress className="progress w-56" value="100" max="100"></progress>
                </div>
            </div>
            <div className='w-full h-full flex flex-col xl:flex-row justify-evenly items-center xl:items-start bg-gradient-to-bl from-slate-50 to-slate-300 py-10 px-8 lg:px-40'>
                <div className='max-w-3xl text-start text-pretty flex flex-col gap-5 px-10 mb-20'>
                    <h1 className='text-5xl font-semibold'>History</h1>
                    <h2>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque suscipit magni necessitatibus, ullam hic temporibus doloribus at facere soluta enim quis ut nostrum iste, distinctio corrupti repellat odit modi! Magnam neque in architecto ex officia ut nostrum aut. Architecto, mollitia.
                    </h2>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-start">1999</div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box">Lorem</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2004</div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box">Ipsum</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2010</div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box">Dolor</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2016</div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box">Sit amet</div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                            <div className="timeline-start">2024</div>
                            <div className="timeline-middle">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                            </div>
                            <div className="timeline-end timeline-box">Consectetur</div>
                        </li>
                    </ul>
                    <h1 className='text-5xl font-semibold mt-5'>Achievement</h1>
                    <h2>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque suscipit magni necessitatibus, ullam hic temporibus doloribus at facere soluta enim quis ut nostrum iste, distinctio corrupti repellat odit modi! Magnam neque in architecto ex officia ut nostrum aut. Architecto, mollitia.
                    </h2>
                    <StatHero />
                </div>
                <div className='bg-gradient-to-tr from-slate-200 to-slate-400 w-full p-10 h-fit justify-center items-center flex max-w-2xl rounded-full'>
                    <Image src={image} width={250} height={250} alt="placeholder" />
                </div>
            </div>
        </>
    )
}

export default AboutHero