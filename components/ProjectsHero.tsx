import Link from 'next/link'
import React from 'react'

const ProjectsHero = () => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center md:items-start bg-slate-300 p-5 gap-10'>
            <div className='grow text-center'>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">Hi.</div>
                    </div>
                </div>
            </div>
            <div className='p-10 text-pretty text-start max-w-4xl mr-auto'>
                <h1 className='text-4xl font-semibold'>Our Work.</h1>
                <br />
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero odit sint fuga.</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos doloremque, esse hic distinctio sed dolorem dolor libero magnam, impedit obcaecati asperiores unde eos quaerat rerum exercitationem! Architecto, sapiente commodi quia distinctio explicabo incidunt. Odit, perferendis totam. Ex nulla quos quibusdam eaque autem! Pariatur repellendus omnis corporis nemo eaque totam.</p>
                <br />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum asperiores exercitationem expedita tempore quod eos reiciendis earum officiis praesentium.</p>
                <br />
                <Link href="/#contact" className='btn'>Contact Us</Link>
            </div>
        </div>
    )
}

export default ProjectsHero