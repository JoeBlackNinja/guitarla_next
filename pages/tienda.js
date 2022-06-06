import Layout from '../components/Layout';
import Listado from '../components/Listado';

const Tienda = ({guitarrasInfo}) => {
  return (
    <Layout
        pagina='Tienda Virtual'
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <Listado
            guitarrasInfo={guitarrasInfo}
          />
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  //?_sort=created_at:desc AGREGAR UN FILTRO DE LLAMADO 
  const url = `${process.env.API_URL}/guitarras?_sort=precio:desc`;
  const respuesta = await fetch(url);
  const guitarrasInfo = await respuesta.json();

  return {
    props :{
      guitarrasInfo
    }
  }
}

export default Tienda;