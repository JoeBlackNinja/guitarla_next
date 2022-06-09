import Layout from '../components/Layout';

import Image from 'next/image';

import styles from '../styles/Nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image 
              layout='responsive'
              width={600} 
              height={450} 
              src='/img/nosotros.jpg'
              alt='Imagen sobre nosotros'
            />
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Etiam mauris mauris, elementum ut nibh nec, 
              accumsan laoreet elit. Ut sagittis, metus sed dignissim 
              placerat, massa velit venenatis quam, id gravida augue
              massa at tortor. Nullam et enim et est consectetur 
              porttitor. Mauris non nisl non sem rhoncus mollis. 
              Aenean imperdiet ex id viverra tempor. Aliquam arcu
              massa, dapibus eget orci a, facilisis maximus ex. 
              Curabitur congue quis erat vitae sollicitudin. Vivamus 
              bibendum massa molestie, tincidunt erat et, posuere nisl.
              Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Etiam mauris mauris, elementum ut nibh nec, 
              accumsan laoreet elit. Ut sagittis, metus sed dignissim 
              placerat, massa velit venenatis quam, id gravida augue
              massa at tortor. Nullam et enim et est consectetur 
              porttitor. Mauris non nisl non sem rhoncus mollis. 
              Aenean imperdiet ex id viverra tempor. Aliquam arcu
              massa, dapibus eget orci a, facilisis maximus ex. 
              Curabitur congue quis erat vitae sollicitudin. Vivamus 
              bibendum massa molestie, tincidunt erat et, posuere nisl.
              Pellentesque habitant morbi tristique senectus et netus et 
              malesuada fames ac turpis egestas.</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

Layout.defaultProps = {
  guitarra : null
}

export default Nosotros