import Layout from '../components/Layout';

const Tienda = ({guitarrasInfo}) => {
  console.log(guitarrasInfo);
  return (
    <Layout
        pagina='Tienda Virtual'
    >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`;
  const respuesta = await fetch(url);
  const guitarrasInfo = await respuesta.json();

  return {
    props :{
      guitarrasInfo
    }
  }
}

export default Tienda;