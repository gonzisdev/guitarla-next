'use client'
import { useEffect, useState } from "react"
import Guitarra from "../components/guitarra"
import styles from '../styles/grid.module.css'


function Tienda() {

  const [guitarras, setGuitarras] = useState([])

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

  return (
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
  )
}

export default Tienda
