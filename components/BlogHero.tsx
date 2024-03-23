"use client"
import Link from "next/link"

const BlogHero = () => {

    return (
        <div className='px-6 py-5 bg-gradient-to-bl from-slate-50 to-slate-300 h-full flex flex-col justify-center items-center'>
            <div className="carousel w-full">
                <div id="blog-one" className="carousel-item w-full flex flex-col justify-center items-center gap-5 pt-32">
                    <img src="/placeholder.png" className="w-96 h-96 mx-auto" />
                    <div className='max-w-xl w-full'>
                        <h1 className='text-3xl -mt-20 text-center'>Blog one.</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quo dolore impedit laboriosam minus at deleniti minima similique ullam aliquam?</p>
                        <a href="/blog/blog-one" className='btn mt-5 btn-secondary'>Read more</a>
                    </div>
                </div>
                <div id="blog-two" className="carousel-item w-full flex flex-col justify-center items-center gap-5 pt-32">
                    <img src="/placeholder.png" className="w-96 h-96 mx-auto" />
                    <div className='max-w-xl w-full'>
                        <h1 className='text-3xl -mt-20 text-center'>Blog two.</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quo dolore impedit laboriosam minus at deleniti minima similique ullam aliquam?</p>
                        <a href="/blog/blog-two" className='btn mt-5 btn-secondary'>Read more</a>
                    </div>
                </div>
                <div id="blog-three" className="carousel-item w-full flex flex-col justify-center items-center gap-5 pt-32">
                    <img src="/placeholder.png" className="w-96 h-96 mx-auto" />
                    <div className='max-w-xl w-full'>
                        <h1 className='text-3xl -mt-20 text-center'>Blog three.</h1>
                        <br />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quo dolore impedit laboriosam minus at deleniti minima similique ullam aliquam?</p>
                        <a href="/blog/blog-three" className='btn mt-5 btn-secondary'>Read more</a>
                    </div>
                </div>

            </div>
            <div className='divider max-w-xl mx-auto w-full'></div>
            <div className="flex justify-center w-full py-2 gap-2">
                <Link href="#blog-one" className="btn btn-md btn-outline">1</Link>
                <Link href="#blog-two" className="btn btn-md btn-outline">2</Link>
                <Link href="#blog-three" className="btn btn-md btn-outline">3</Link>
            </div>
        </div>
    )
}

export default BlogHero