import { useQuery } from "@tanstack/react-query"
import { getUser, retrievePostsWithId } from "../hooks/apiCalls"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function SearchWithId() {
    const [postId, setPostId] = useState(1)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            postId: 1
        }
    })
    const postQuery = useQuery({
        queryKey: ["posts", postId],
        queryFn: () =>  retrievePostsWithId(postId)
    })
    
    const userQuery = useQuery({
        queryKey: ["users", postQuery?.data],
        queryFn: () => getUser(postQuery?.data?.userId),
        enabled: postQuery?.data?.userId !== undefined
    })

    if (postQuery.isLoading) return <h1>Loading...</h1>
    if (postQuery.error) return <h1>{JSON.stringify(postQuery.error)}</h1>

    return (
    <form onSubmit={handleSubmit((data) => setPostId(data.postId))}>
        <h1>Fetch ID and Post</h1>
        <input type="number" {...register("postId")} />
        <button>Search</button>
        <ul>
            <li>Post ID: {postQuery?.data?.id}</li>
            <li>Post Title: {postQuery?.data?.title}</li>
            <li>Post Body: {postQuery?.data?.body}</li>
            <li>Post User ID: {postQuery?.data?.userId}</li>
        </ul>
        <br />
        <ul>
            <li>User Name: {userQuery?.data?.id}</li>
            <li>{userQuery?.data?.name}</li>
            <li>{userQuery?.data?.username}</li>
            <li>{userQuery?.data?.email}</li>
            <li>{userQuery?.data?.phone}</li>
        </ul>
        </form>
    ) 
}