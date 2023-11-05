import React from "react";
import { useQuery, useMutation } from "react-query";
import { useForm } from "react-hook-form";

const POSTS = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
];

const RenderCounter = () => {
    const [title, setTitle] = React.useState("");
    const wait = (duration: number) =>
        new Promise((resolve) => setTimeout(resolve, duration));

    const postQuery = useQuery({
        queryKey: ["posts"],
        queryFn: () => wait(2000).then(() => [...POSTS]),
        // queryFn: () => Promise.reject("Error"),
    });

    const newPostMutation = useMutation({
        mutationFn: (title: string) =>
            wait(1000).then(() => {
                POSTS.push({ id: Math.floor(Math.random() * 1000), title });
            }),
    });

    const submitPost = (title: string) => newPostMutation.mutate(title);

    if (postQuery.isLoading) return <h1>Loading...</h1>;
    if (postQuery.error) return <pre>{JSON.stringify(postQuery.error)}</pre>;

    console.log(title);
    return (
        <div>
            <ul>
                {postQuery.data?.map((d) => (
                    <li>{`id: ${d.id} title: ${d.title}`}</li>
                ))}
            </ul>
            <form onSubmit={() => submitPost(title)}>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RenderCounter;
