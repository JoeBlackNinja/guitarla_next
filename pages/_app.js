import '../styles/normalize.css';
import '../styles/globals.css';

import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  useEffect( () => {
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLS);
  },[])

  const agregarCarrito = (producto) => {
    if(carrito.some((articulo) => articulo.id === producto.id)){
      const carritoActualizado = carrito.map((articulo) => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad
        }
        return articulo;
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  }

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad
      }
      return articulo;
    });
    setCarrito(carritoActualizado);
  }

  const eliminarArticulo = (id) => {
    const areYouSureAlert = confirm('Estás seguro de eliminar este articulo');
    console.log(areYouSureAlert);
    if(areYouSureAlert){    
      const carritoActualizado = carrito.filter( articulo => 
        articulo.id !== id);
      setCarrito(carritoActualizado);
    }
  }

  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarArticulo={eliminarArticulo}
  />
}

export default MyApp
