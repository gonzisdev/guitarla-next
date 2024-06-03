'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 
import Image from 'next/image';
import styles from '../../styles/guitarras.module.css';
import { useCarrito } from '@/app/components/carritoContext';


const Producto = () => {
  const [cantidad, setCantidad] = useState(0);
  const [guitarra, setGuitarra] = useState(null);
  const params = useParams();

  const { carrito, agregarCarrito, eliminarProducto, actualizarCantidad } = useCarrito()
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGuitarra(params.nombre);
        setGuitarra(data[0].attributes);
      } catch (error) {
        console.error('Error fetching guitarra', error);
      }
    };

    fetchData();
  }, [params.nombre]);

  const getGuitarra = async (url) => {
    const respuesta = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/guitarras?filters[url]=${url}&populate=imagen`
    );
    const { data } = await respuesta.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      alert('Cantidad no válida');
      return;
    }

    const { nombre, imagen, precio } = guitarra;
 console.log(guitarra.url);
    const guitarraSeleccionada = {
      id: guitarra.url,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    };
   agregarCarrito(guitarraSeleccionada)
  };

  const handleChangeCantidad = (e) => {
    const selectedQuantity = Number(e.target.value);
    setCantidad(selectedQuantity);
  };

  if (!guitarra) {
    return <div>Cargando...</div>;
  }

  const { nombre, descripcion, imagen, precio } = guitarra;

  return (
    <div className={styles.guitarra}>
      <Image src={imagen.data.attributes.url} alt={`Imagen guitarra ${nombre}`} width={600} height={400} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion[0].children[0].text}</p>
        <p className={styles.precio}>${precio}</p>

        <form onSubmit={handleSubmit} className={styles.formulario}>
          <label htmlFor="cantidad">Cantidad:</label>
          <select onChange={handleChangeCantidad} value={cantidad} id="cantidad">
            <option value="0">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Añadir al carrito" />
        </form>
      </div>
    </div>
  );
};

export default Producto;