'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { formatearFecha } from '@/app/helpers/helpers';
import styles from '../../styles/blog.module.css';

export default function PostIndividual() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost(params.url);
        if (data && data.length > 0) {
          setPost(data[0].attributes);
        }
      } catch (error) {
        console.error('Error fetching post', error);
      }
    };

    if (params.url) {
      fetchData();
    }
  }, [params.url]);

  const getPost = async (url) => {
    const respuesta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const { data } = await respuesta.json();
    console.log(data);
    return data;
  };

  if (!post) {
    return <div>Cargando...</div>;
  }

  const { contenido, imagen, titulo, publishedAt } = post;

  return (
    <article className={`${styles.post} ${styles['mt-3']}`}>
      <Image src={imagen.data.attributes.url} alt={`Imagen post ${titulo}`} width={1000} height={400} />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{contenido[0].children[0].text}</p>
      </div>
    </article>
  );
}