import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

const Post = () => {};

export default Post;
