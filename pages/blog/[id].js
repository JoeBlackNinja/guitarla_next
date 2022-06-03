import { useRouter } from "next/router";
import Layout from '../../components/Layout';
import Image from 'next/image';
import styles from '../../styles/Entrada.module.css';

import {formatearFecha} from '../../helpers/formatoFecha'; 

const EntradaBlog = ({resultado}) => {
    const {contenido, imagen, published_at, titulo} = resultado;
    console.log(published_at);
    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">
                    {titulo}
                </h1>  
                <article className={styles.entrada}>
                    <Image 
                        layout="responsive"
                        width={800}
                        height={600}
                        src={imagen.url}
                        alt={`Imagen entrada ${titulo}`}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>          
            </main>
        </Layout>
    )
}

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    const paths = resultado.map(entrada => ({
        params: {id:entrada.id}
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {id}}){
    const url = `${process.env.API_URL}/blogs/${id}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return {
        props: {
            resultado
        }
    }
}

/* export async function getServerSideProps({query:{id}}){
    const url = `${process.env.API_URL}/blogs/${id}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    console.log(resultado);
    return{
        props: {
            resultado
        }
    }
} */



export default EntradaBlog;