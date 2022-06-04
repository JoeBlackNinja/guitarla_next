import {formatearFecha} from '../helpers/formatoFecha';
import Link from 'next/link';

import Image from 'next/image';

import styles from '../styles/Entrada.module.css';

const Entrada = (props) => {
    const {titulo, resumen, imagen, published_at, id, url } = props.entrada;

  return (
    <article>
        <Image 
            src={imagen.url} 
            alt={`imagen blog ${titulo}`}
            width={800}
            height={600}
            layout='responsive'
            priority='true'
        />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.resumen}>{resumen}</p>
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace}>
                    Leer entrada
                </a> 
            </Link>
        </div>        
    </article>
  )
}

export default Entrada