import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';
import Image from 'next/image';

import { useState, useEffect } from 'react';

const Carrito = ({carrito, actualizarCantidad, eliminarArticulo}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, articulo) => 
            (articulo.precio * articulo.cantidad) + total, 0);
        setTotal(calculoTotal);  
    },[carrito])

    return (
        <Layout 
        pagina={'Carrito de Compras'}
        >
            <h1 className='heading'>Carrito</h1>
            <main className={`${styles.contenido} contenedor`}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.length === 0 ? 'Carrito vacio' :(
                        carrito.map( producto => (
                            <div
                                key={producto._id} 
                                className={styles.producto}
                            >
                                <div>
                                    <Image
                                        layout='responsive'
                                        width={250}
                                        height={500}
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />
                                </div>
                                <div>
                                    <p className={styles.nombre}>
                                        Modelo: {producto.nombre}
                                    </p>

                                    <div className={styles.cantidad}>
                                        <p>Cantidad:</p>
                                        <select
                                            className={styles.select}
                                            value={producto.cantidad}
                                            onChange={(e) => 
                                                actualizarCantidad({
                                                    cantidad: e.target.value,
                                                    id: producto._id
                                            })}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                        </select>
                                    </div>

                                    <p className={styles.precio}>
                                        <span>Precio: ${producto.precio}</span>
                                    </p>
                                    <p className={styles.subtotal}>
                                        Subtotal: $ 
                                        <span>
                                            {producto.precio * producto.cantidad}
                                        </span>
                                    </p> 
                                    <button
                                        className={styles.botonEliminar}
                                        type='button'
                                        onClick={ () => eliminarArticulo(producto._id)}
                                    >X</button>                                   
                                </div>     

                            </div>                            
                        ))
                    )}
                </div>

                <div className={styles.resumen}>
                    <h3>
                        Resumen del pedido: {console.log(total)}
                        {total > 0 ? (
                            <>
                                <p>
                                    Total a pagar: ${total}
                                </p>
                            </>
                        ): 'No hay productos en el carrito'}
                    </h3>
                </div>
            </main>
        </Layout>
    )
}

export default Carrito