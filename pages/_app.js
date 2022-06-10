import '../styles/normalize.css';
import '../styles/globals.css';
import { useState } from 'react';


function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = producto => {
    setCarrito([...carrito, producto]);
  }

  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
  />
}

export default MyApp
