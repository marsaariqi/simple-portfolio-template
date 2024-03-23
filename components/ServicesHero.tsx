import Image from "next/image"


const ServicesHero = () => {
    const image = "/placeholder.png"
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='flex flex-col md:flex-row w-full items-center justify-center grow'>
                <div className='bg-gradient-to-tr from-slate-200 to-slate-400 w-full p-10 h-full justify-center items-center flex'>
                    <Image src={image} width={300} height={300} alt="placeholder" />
                </div>
                <div className='bg-base-100 w-full p-10 h-full flex flex-col gap-10'>
                    <h1 className='text-3xl'>Lorem, ipsum.</h1>
                    <p className='text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore vitae nisi blanditiis animi quod necessitatibus rerum dolores rem distinctio optio accusantium, quaerat perferendis consectetur voluptas nostrum! Aliquam maiores, id voluptates blanditiis accusantium minima, obcaecati sequi inventore repellendus nisi eius.</p>
                    <p className='text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore vitae nisi blanditiis animi quod necessitatibus rerum dolores rem distinctio optio accusantium, quaerat perferendis consectetur voluptas nostrum! Aliquam maiores, id voluptates blanditiis accusantium minima, obcaecati sequi inventore repellendus nisi eius.</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row w-full items-center justify-center grow'>
                <div className='bg-base-100 w-full p-10 h-full flex flex-col gap-10 text-end'>
                    <h1 className='text-3xl'>Lorem, ipsum.</h1>
                    <p className='text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore vitae nisi blanditiis animi quod necessitatibus rerum dolores rem distinctio optio accusantium, quaerat perferendis consectetur voluptas nostrum! Aliquam maiores, id voluptates blanditiis accusantium minima, obcaecati sequi inventore repellendus nisi eius.</p>
                    <p className='text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore vitae nisi blanditiis animi quod necessitatibus rerum dolores rem distinctio optio accusantium, quaerat perferendis consectetur voluptas nostrum! Aliquam maiores, id voluptates blanditiis accusantium minima, obcaecati sequi inventore repellendus nisi eius.</p>

                </div>
                <div className='bg-gradient-to-tl from-slate-200 to-slate-400 w-full p-10 h-full justify-center items-center flex'>
                    <Image src={image} width={300} height={300} alt="placeholder" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center justify-center grow'>
                <div className='bg-gradient-to-tr from-slate-200 to-slate-400 w-full p-10 h-full justify-center items-center flex'>
                    <Image src={image} width={300} height={300} alt="placeholder" />
                </div>
                <div className='bg-base-100 w-full p-10 h-full flex flex-col gap-10'>
                    <h1 className='text-3xl'>Lorem, ipsum.</h1>
                    <p className='text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore vitae nisi blanditiis animi quod necessitatibus rerum dolores rem distinctio optio accusantium, quaerat perferendis consectetur voluptas nostrum! Aliquam maiores, id voluptates blanditiis accusantium minima, obcaecati sequi inventore repellendus nisi eius.</p>
                    <p className='text-pretty'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore vitae nisi blanditiis animi quod necessitatibus rerum dolores rem distinctio optio accusantium, quaerat perferendis consectetur voluptas nostrum! Aliquam maiores, id voluptates blanditiis accusantium minima, obcaecati sequi inventore repellendus nisi eius.</p>
                </div>
            </div>

        </div>
    )
}

export default ServicesHero