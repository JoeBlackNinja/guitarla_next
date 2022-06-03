import Layout from '../components/Layout';
import Entrada from '../components/Entrada';

import styles from '../styles/Blog.module.css';

const Blog = ({resultado}) => {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;
  console.log(url);

  return (
    <Layout
        pagina='Blog'
    >
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>
          <div className={styles.blog}>
            {resultado.map(entrada => (
              <Entrada
                key={entrada.id}
                entrada={entrada}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return {
    props:{
      resultado
    }
  }
}

export default Blog;