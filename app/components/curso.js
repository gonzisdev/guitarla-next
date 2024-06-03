import Image from "next/image";
import styles from '../styles/curso.module.css';

function Curso({ curso }) {
  const imageUrl = curso.attributes?.imagen.data.attributes.url;
  const backgroundStyles = {
    backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imageUrl})`,
  };

  return (
    <section className={`${styles.curso}`} style={backgroundStyles}>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{curso.attributes?.titulo}</h2>
          <p>{curso.attributes?.contenido[0].children[0].text}</p>
        </div>
      </div>
    </section>
  );
}

export default Curso;