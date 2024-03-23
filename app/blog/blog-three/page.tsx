import BlogDetails from '@/components/blog_details/BlogDetails'

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-between w-svw ">
            <div className="h-full w-full">
                <BlogDetails number='three' year='2019' />
            </div>
        </main>
    )
}

export default Page