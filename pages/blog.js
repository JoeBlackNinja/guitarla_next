import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({resultado}) => {
  return (
    <Layout
        pagina='Blog'
    >
        <main className='contenedor'>
          <ListadoBlog
            entradas={resultado}
          />
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();

  return {
    props:{
      resultado
    }
  }
}

export default Blog;