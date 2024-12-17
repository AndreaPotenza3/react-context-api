import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { base_api } from './PostPage'
import { useNavigate } from "react-router-dom"


export default function Details() {


    const { id } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${base_api}posts/${id}`)
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }, [id])

    return (

        <>
            <div>
                <button onClick={() => navigate(-1)}>Indietro</button>
            </div >
            {post && < div >
                <h1>{post.title}</h1>
                <div className="det-card">
                    <figure>
                        <img src={`${base_api}/imgs/posts/${post.image}`} alt="" />
                    </figure>
                    <p>{post.content}</p>
                </div>
            </div >
            }
        </>
    )
}
