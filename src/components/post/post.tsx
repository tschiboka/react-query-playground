import axios from "axios";
import { useQuery } from "react-query";

interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const retrievePosts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data as [PostItem];
};

const Post = () => {
    const {
        data: posts,
        error,
        isLoading,
    } = useQuery("postsData", retrievePosts);

    if (isLoading) return <div>Fetching posts...</div>;
    if (error) return <div>An error occurred: {JSON.stringify(error)}</div>;

    return (
        <ul>
            {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
};

export default Post;
