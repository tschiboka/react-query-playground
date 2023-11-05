import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { useForm } from "react-hook-form";

const POSTS = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
];

const RenderCounter = () => {
    const [title, setTitle] = React.useState("");
    const wait = (duration: number) =>
        new Promise((resolve) => setTimeout(resolve, duration));

    const queryClient = useQueryClient();
    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => wait(1000).then(() => [...POSTS]),
        // queryFn: () => Promise.reject("Error")
    });

    const newPostMutation = useMutation({
        mutationFn: (title: string) =>
            wait(1000).then(() => {
                POSTS.unshift({ id: Math.floor(Math.random() * 1000), title });
                console.log(POSTS);
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            setTitle("");
        },
    });

    const submitPost = (event: React.FormEvent, title: string) => {
        event.preventDefault();
        console.log(title);
        newPostMutation.mutate(title);
    };

    if (postQuery.isLoading) return <h1>Loading...</h1>;
    if (postQuery.error) return <pre>{JSON.stringify(postQuery.error)}</pre>;

    return (
        <div>
            <ul>
                {postQuery.data?.map((d) => (
                    <li key={d.id}>{`id: ${d.id}, title: ${d.title}`}</li>
                ))}
            </ul>
            <form onSubmit={(e) => submitPost(e, title)}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button type="submit" disabled={newPostMutation.isPending}>
                    Submit New Post
                </button>
            </form>
        </div>
    );
};

export default RenderCounter;
