interface BlogProps {
    number: string;
    year: string;
}
const BlogDetails = ({ number, year }: BlogProps) => {
    return (
        <>
            <div className='w-full h-1/3 flex flex-col justify-center items-center bg-gradient-to-bl from-slate-50 to-slate-300 pt-40'>
                <div className='max-w-3xl text-center text-pretty flex flex-col gap-10 px-10 mb-20'>
                    <h1 className='text-5xl font-semibold'>Blog {number}</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ullam suscipit molestiae dolorem neque, beatae libero enim amet illum autem numquam.
                    </h2>
                </div>
            </div>
            <div className='w-full h-full flex flex-col justify-start items-center bg-slate-200 pt-10 px-10'>
                <div className='max-w-3xl text-start text-pretty flex flex-col gap-10 mb-20'>
                    <h1 className='text-5xl font-semibold'>Lorem, ipsum dolor.
                        <br /><span className="text-lg font-mono font-thin">August 3, {year}</span>
                    </h1>
                    <h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat esse perferendis laborum inventore minima eum quos ratione praesentium voluptas atque debitis minus, consectetur quae similique pariatur nulla enim dignissimos deleniti. Voluptatibus odit, officia veniam dignissimos nam explicabo deserunt aperiam fugiat, autem, recusandae expedita porro nemo qui eligendi quibusdam doloribus. Assumenda, voluptatum. Voluptatum dolores labore rerum modi, eligendi impedit voluptatibus odit?
                    </h2>
                    <div className="mockup-code mx-auto">
                        <pre data-prefix="$"><code>npm i daisyui</code></pre>
                    </div>
                    <h2 className="italic font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sit.</h2>
                    <div className="mockup-code mx-auto">
                        <pre data-prefix="$"><code>npm i daisyui</code></pre>
                        <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
                        <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
                    </div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reprehenderit debitis distinctio quaerat iusto rerum officiis quis. Alias facilis neque voluptate mollitia nisi rerum magnam hic accusamus porro maiores quae vitae ex aut, odio cum error quam, consequuntur deserunt totam!</h2>
                    <div className="mockup-code mx-auto">
                        <pre data-prefix="1"><code>npm i daisyui</code></pre>
                        <pre data-prefix="2"><code>installing...</code></pre>
                        <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
                    </div>
                    <h2 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente odit nihil expedita repellendus ad, dolor enim distinctio perferendis minima voluptate tenetur, suscipit nulla consequuntur. Natus, at, officiis eius a voluptatem laudantium alias vero laboriosam quisquam suscipit quia voluptas! Ut id quod iste perferendis iusto tempore dolor suscipit nulla aliquam, vel eum praesentium atque, distinctio architecto libero cum enim impedit.</h2>
                    <h1 className="text-2xl font-semibold underline">Lorem, ipsum dolor.</h1>
                    <h2 className="font-mono p-5 bg-slate-600 text-slate-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sunt fugit explicabo iure, facilis non eos aliquam magnam quas possimus asperiores doloremque voluptatibus aliquid placeat sed quae similique eum. Minus iure quibusdam quas, obcaecati perspiciatis fugiat excepturi voluptatum eveniet deleniti quia.</h2>
                    <div className="flex flex-col gap-4">
                        <div className="collapse collapse-arrow border-2 border-slate-500">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique ex aliquam consectetur. Obcaecati error et maiores totam eius beatae.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-2 border-slate-500">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ratione.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-2 border-slate-500">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, dolorum. Unde et eligendi ab, sit facilis id vero numquam exercitationem, ducimus fuga blanditiis at iste ex dolor quo totam itaque magni, laboriosam distinctio laudantium rem veritatis iure. Nulla, cupiditate? Impedit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails