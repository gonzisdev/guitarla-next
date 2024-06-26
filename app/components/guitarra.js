import Image from "next/image"
import Link from "next/link";
import styles from '../styles/guitarras.module.css'

function Guitarra({guitarra}) {

  const { descripcion, imagen, nombre, precio, url } = guitarra

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400}/>
    
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styles.precio}>${precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}

export default Guitarra
