import { useContext } from "react"
import PostList from "./PostList"
import GlobalContext from "../context/context"


export default function Blog() {

    const { newPosts } = useContext(GlobalContext)

    return (
        <>
            <h1 className='sub-title'>Lista dei prodotti</h1>
            <PostList items={newPosts} />
        </>
    )

}

