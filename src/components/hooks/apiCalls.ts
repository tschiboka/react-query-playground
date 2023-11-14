import axios from "axios";

export interface PostItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface UserItem {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export const retrievePosts = async () => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data as [PostItem];
};

export const retrievePostsWithId = async (id: number) => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return response.data as PostItem;
};


export const getUser = async (id: number | undefined) => {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + id
    );
    return response.data as UserItem;
};