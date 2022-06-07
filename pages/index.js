import Layout from '../components/Layout';
import Listado from '../components/Listado';
import Curso from '../components/Curso';

export default function Home({guitarras, cursos}) {
  return (
    <Layout
        pagina='Inicio'
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
    </Layout>
  )
}

export async function getServerSideProps() {

  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;

  const [resGuitarra, resCursos] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos)
  ])

  const [guitarras, cursos] = await Promise.all([
    resGuitarra.json(),
    resCursos.json()
  ])

  return {
    props :{
      guitarras,
      cursos
    }
  }
}