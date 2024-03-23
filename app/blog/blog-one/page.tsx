import BlogDetails from '@/components/blog_details/BlogDetails'

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-between w-svw ">
            <div className="h-full w-full">
                <BlogDetails number='one' year='2024' />
            </div>
        </main>
    )
}

export default Page