import React from 'react'

const ContactHero = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-gradient-to-bl from-slate-50 to-slate-300 pt-20'>
            <div className='max-w-3xl text-center text-pretty flex flex-col gap-10 px-10 mb-20 w-full'>
                <h1 className='text-5xl font-semibold'>Contact Us!</h1>
                <div className='w-full h-full border-2 border-secondary rounded-2xl py-8 px-5 text-start flex flex-col form-control'>
                    <div className="label">
                        <span className="label-text">What is your name?</span>
                    </div>
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text">What is your email?</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text">What is your inquiries?</span>
                    </div>
                    <input type="text" placeholder="Inquiries" className="input input-bordered w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text">Messages!</span>
                    </div>
                    <textarea className="textarea textarea-bordered w-3/4" placeholder="Warm message" rows={5}></textarea>
                    <button className='btn btn-secondary mt-5' type='submit'>Submit!</button>
                </div>
            </div>
        </div>
    )
}

export default ContactHero