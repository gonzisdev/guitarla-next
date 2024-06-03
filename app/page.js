'use client'

import { useEffect, useState } from "react"
import styles from './styles/grid.module.css'
import Guitarra from "./components/guitarra"
import Post from "./components/post"
import Curso from "./components/curso"

export default function Home() {

  const [guitarras, setGuitarras] = useState([])
  const [posts, setPosts] = useState([])
  const [curso, setCurso] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const respuesta  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?populate=imagen`)
        const {data: guitarras }= await respuesta.json()
        setGuitarras(guitarras)
      } catch (error) {
        console.log(error)
      }
    }
    consultarApi()
  }, [])

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const respuesta  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/curso?populate=imagen`)
        const {data: curso }= await respuesta.json()
        setCurso(curso)
      } catch (error) {
        console.log(error)
      }
    }
    consultarApi()
  }, [])

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
    <>
      <main className="contenedor"> 
        <h1 className="heading">Nuestra Colección</h1>

        <div className={styles.grid}>
          {
            guitarras.map(guitarra => (
              <Guitarra
                key={guitarra.id}
                guitarra={guitarra?.attributes}
              />
            ))
          }
        </div>
      </main>

      <Curso
        curso={curso}
      />    

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
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
      </section>

    </>
    
  )
}
