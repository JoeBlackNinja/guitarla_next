import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>Guitar LA - {pagina}</title>
            <meta name="description" content="Sitio Web de 
            venta de guitarras"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;0,900;1,400&display=swap" rel="stylesheet"></link>
        </Head>

        <Header/>

        {children}

        <Footer/>

    </div>    
  )
}

export default Layout