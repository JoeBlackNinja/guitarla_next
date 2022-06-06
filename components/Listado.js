import Guitarra from "./Guitarra";
import styles from '../styles/Listado.module.css';

const Listado = ({guitarrasInfo}) => {
  return (
    <div
      className={styles.listado}
    >
        {guitarrasInfo.map(guitarra => (
            <Guitarra
                key={guitarra.url}
                guitarra={guitarra}
            />
        ))}
    </div>
  )
}

export default Listado