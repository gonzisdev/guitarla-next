import Image from "next/image"
import Link from "next/link"
import { formatearFecha } from "../helpers/helpers"
import styles from '../styles/blog.module.css'

function Post({post}) {

    const { contenido, imagen, titulo, url, publishedAt } = post

  return (
    <article>
        <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen Blog ${titulo}`} width={600} height={400} />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido[0].children[0].text}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>
                Leer Post
            </Link>
        </div>
    </article>
  )
}

export default Post