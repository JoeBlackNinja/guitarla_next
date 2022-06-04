import Link from 'next/link';
import styles from '../styles/error404.module.css';

const error404 = () => {
  return (
       <div className={styles.no_encontrado}>
           <h1 className="heading">Pagina no encontrada</h1>
            <Link href='/'>Volver al inicio</Link>
       </div>
  )
}

export default error404;