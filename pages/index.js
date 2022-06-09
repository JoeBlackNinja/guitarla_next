import Layout from '../components/Layout';
import Listado from '../components/Listado';
import Curso from '../components/Curso';
import ListadoBlog from '../components/ListadoBlog';

export default function Home({guitarras, cursos, blog}) {
  return (
    <Layout
        pagina='Inicio'
        guitarra={guitarras[2]}
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <Listado
            guitarrasInfo={guitarras}
          />
        </main>
        <Curso
          curso={cursos}
        />
        <section className='contenedor'>
          <ListadoBlog 
            entradas={blog}
          />
        </section>
    </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarra, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs)
  ])

  const [guitarras, cursos, blog] = await Promise.all([
    resGuitarra.json(),
    resCursos.json(),
    resBlogs.json()
  ])

  return {
    props :{
      guitarras,
      cursos,
      blog
    }
  }
}