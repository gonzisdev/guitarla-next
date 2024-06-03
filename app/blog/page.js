"use client"

import { useEffect, useState } from "react"
import Post from "../components/post"
import styles from '../styles/grid.module.css'

function Blog() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const respuesta  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?populate=imagen`)
        const {data: posts }= await respuesta.json()
        setPosts(posts)
      } catch (error) {
        console.log(error)
      }
    }
    consultarApi()
  }, [])

  return (
    <main className="contenedor">
      <h1 className="heading">Blog</h1>
      <div className={styles.grid}>
        {
          posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))
        }
      </div>
      
    </main>
  )
}

export default Blog