import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>      
      <h1>Desde inicio</h1>
      <Link href="nosotros/">Ir a nosotros...</Link>
    </div>
  )
}
