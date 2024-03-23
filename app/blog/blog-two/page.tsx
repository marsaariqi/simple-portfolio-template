import BlogDetails from '@/components/blog_details/BlogDetails'

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-between w-svw ">
            <div className="h-full w-full">
                <BlogDetails number='two' year='2023' />
            </div>
        </main>
    )
}

export default Page