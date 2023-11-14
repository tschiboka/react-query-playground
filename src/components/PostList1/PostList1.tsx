import { useQuery } from "@tanstack/react-query"
import { retrievePosts } from "../hooks/apiCalls"

export default function PostList1() {
    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: retrievePosts
    })

    if(postQuery.status === "pending") return <h1>Loading...</h1>
    if(postQuery.status === "error") return <h1>{
        JSON.stringify(postQuery.error)
    }</h1>

    return (
        <div>
        <h1>Post List 1</h1>
        <ol>
            {postQuery.data.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}
        </ol>
        </div>
    )
}