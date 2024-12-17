import { useContext } from "react"
import GlobalContext from "../context/context"
import { Link } from "react-router-dom"

export default function PostCard({ item }) {

    const { title, id, image } = item

    const { base_api, newPosts } = useContext(GlobalContext)
    return (
        <>
            <h3>{title}</h3>
            <img src={`${base_api}/imgs/posts/${image}`} alt="" />
            <Link to={`/${id}`}>Dettagli</Link>
        </>
    )
}