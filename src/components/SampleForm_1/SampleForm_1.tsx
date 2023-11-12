import {useState} from "react"
import PostList1 from "../PostList1/PostList1";
import PostList2 from "../PostList2/PostList2";

const Post1 = () => {
    const [currentPage, setCurrentPage] = useState(<PostList1 />)
    return <div>
        <button onClick={() => setCurrentPage(<PostList1 />)}>Post 1</button>
        <button onClick={() => setCurrentPage(<PostList2 />)}>Post 2</button>
        <br />
        <div>{currentPage}</div>
    </div>;
};

export default Post1;
