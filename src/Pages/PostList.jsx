import { useContext } from "react";
import PostCard from "./PostCard";
import GlobalContext from "../context/context";


export default function PostList({ items = [] }) {

    const { newPosts } = useContext(GlobalContext)

    return (
        <ul className='char-list'>
            {newPosts.map(post => (
                <li key={post.id}>
                    <PostCard item={post} />
                </li>
            ))}
        </ul>
    )
}